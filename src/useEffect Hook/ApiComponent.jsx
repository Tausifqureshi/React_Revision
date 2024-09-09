// ChatGPT Se Liya Hua Syntex ---> Example.dono tarika sahi hai jo eyse pade o karo koi issu nhi hai is me.

import React, { useState, useEffect } from "react";
import "./ApiComponent.css"; // Import CSS for styling

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Error message ke liye

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`${response.status} Network response was not ok.`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        {data.map((item) => <h3 key={item.id}>{item.name}</h3>)}
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
