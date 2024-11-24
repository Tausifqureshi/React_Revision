import React, { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";

function Z() {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [seeToggle, setSeeToggle] = useState({}); // Initially an empty object

  async function postData() {
    try {
      const fetchData = await fetch(URL);
      if (!fetchData.ok) {
        throw new Error(`Data not found on this page ${fetchData.status}`);
      }
      const responseData = await fetchData.json();
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
  }

  useEffect(() => {
    postData();
  }, []);

  function seeMoreHandle(event) {
   console.log("ID mil ri hai yaah se",event);
    setSeeToggle((prevToggle) => ({
      ...prevToggle,
      [event]: !prevToggle[event], // Toggle the specific item by id
    }));
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div className="main">
      {data && (
        <div className="container">
          {data.map((item) => (
            <div className="product" key={item.id}>
              <img
                src={item.image}
                alt="item"
                style={{ height: "250px", width: "250px", objectFit: "contain" }}
              />
              <h5 className="title">{item.title.slice(0, 30)}</h5>
              <p className="price">{item.price}</p>

              {seeToggle[item.id] && (
                <p className="description">{item.description.slice(0, 50)}</p>
              )}

              <div className="btn">
                <button>Add Bag</button>
                <button onClick={() => seeMoreHandle(item.id)}>
                  {seeToggle[item.id] ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Z;



// react form hook 
// validtion --> yap library 
