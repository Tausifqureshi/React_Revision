import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
    const url = "https://jsonplaceholder.typicode.com/users"

    const params= useParams();
    const {id}= useParams(); // useParams se destructuring karke URL se id nikal rahe hain, jo React Router ke routes me defined hai. Agar route me id ka naam kuch aur hoga, to useParams me bhi wahi naam dena hoga aur PostDetails component me bhi wahi naam use karna padega.
  
    console.log(id);
    console.log(params);  
    const [data, setData] = useState(null);  
    async function fetchData() {
      try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
          throw Error(`Data not found this page ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.log(error);
       
      }
    }
    useEffect(() => {
      fetchData();
    }, []);
    
  return <div>

     {data && 
     <div style={{border: "1px solid #232323"}}>
     <h1>{data.name}</h1>
     <h3>{data.username}</h3>
     <p>{data.address.city}</p>
     <p>{data.address.catchPhrase}</p>

     </div>
     
     }

   </div>;
}

export default PostDetails;
