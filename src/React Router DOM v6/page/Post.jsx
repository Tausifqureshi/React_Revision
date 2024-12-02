import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const URL = "https://jsonplaceholder.typicode.com/users";
function Post() {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null); //Error Massage Show Karne Ke Liye.

  async function fetchData() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw Error(`Data not found this page ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.log(error);
     setIsError(error.message) ; // Error message ko state mein set karna.
    }
  } 
  useEffect(() => {
    fetchData();
  }, []);
  return (
      <div className="">
      {isError ? <p style={{ color: "red", textAlign: "center" }}>{isError}</p>: // Agar error hai to error message  dikhana warna username show hoga
        <div>
          <h1>Post Page Welcome</h1>
        {/* {data && <ul>{data.map((user) => <li key={user.id}>{user.name}</li> )} </ul> } */}

        {data && <>{data.map((user) => <Posts key={user.id} {...user}/> )} </> }
       
        </div>
      }
    </div>
  );
}

export default Post;
