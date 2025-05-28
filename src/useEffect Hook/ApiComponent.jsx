// ChatGPT Se Liya Hua Syntex ---> Example.dono tarika sahi hai jo eyse pade o karo koi issu nhi hai is me.

import React, { useState, useEffect } from "react";
import "./ApiComponent.css"; // Import CSS for styling

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Error message ke liye

  useEffect(() => {
     // Create an AbortController instance
     const controller = new AbortController();
     const signal  = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: signal });
        console.log(response);
        
        if (!response.ok) {
          throw new Error(`${response.status} Network response was not ok.`);
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();


    // Cleanup function to abort the request on component unmount
      return () => {
        console.log("...abort call")
        controller.abort();
      };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spring-loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <div> 
      {/* Without return keyword use Short Syntext */}
        {/* {data.map((item) => <div key={item.id}>
            <h3>FirstNamae: {item.name}</h3>
        </div>)} */}

        {/* Return keyword use  */}
        {data.map((item)=>{
           return <div key={item.id} style={{
            margin: "1rem",
            padding: "1rem",
            background: "#292929",
            color: "#efefef",
            textAlign: "center",
            border: "3px solid  brown",
           
           }}>
            <h3>Name{item.name}</h3>
            <h4>City{item.address.city}</h4>
            <h3>Name{item.email}</h3>
            <h5>{item.username}</h5>

            </div>
         
        })}
      </div>
    </div>
  );
};

export default ApiComponent;






// Harshit Vashit se karya hua Example hai ye. dono tarika sahi hai jo eyse pade o karo koi issu nhi hai is me.

// import React, { useState, useEffect } from "react";
// import "./ApiComponent.css"; // Import CSS for styling

// const ApiComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false); // Error ke liye.
//   const [ errorMessage, setErrorMessage] = useState(""); //Error Messages print karne ke liye ye state.



//   const fetchData = async () => {
    
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!(response.status  >= 200 && response.status < 299 )) {
//         setError(true);
//         setErrorMessage(`${response.status} Network response was not ok`)
//         setLoading(false)
//         return;
//       } 

//       const result = await response.json();
//       setData(result); 
//       setLoading(false);
//   };
//   useEffect(() => {
   

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-container">
//         <div className="spring-loader"></div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {errorMessage}</div>;
//   }

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <div>
//         {data.map((item) => <h3 key={item.id}>{item.name}</h3>)}
//       </div>
//     </div>
//   );
// };

// export default ApiComponent;
