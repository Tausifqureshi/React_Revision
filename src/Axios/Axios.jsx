// Axios example for data fetching in React.

// import axios from 'axios'
// import React, { useEffect } from 'react'

// function QueryExample() {
//   const[data, setData] = React.useState(null)
//   const [isLoading, setIsLoading] = React.useState(true)
//   const [error, setError] = React.useState(null)

//   const fetchData = async () => {
//     const controller = new AbortController()
//     const signal = controller.signal
    
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/postss', { signal: signal })
//       console.log("response", response)
//       console.log(response.statusText); // "OK"
//       if(response.data.length === 0) {
//         throw new Error(`No data found  ${response.status}`)
//       }

//       // if (response.status !== 200) {
//       //   throw new Error(`Error fetching data: ${response.status} statusText ${response.statusText}`)
        
//       // }
//      setData(response.data);     // naya data mil gaya
// setIsLoading(false);        // loading khatam
// setError(null);             // purana error hata do

//     } catch (error) {
//       setError(error.message)
//        console.log(error.response.statusText); // e.g., "Not Found"
//       // console.error("Error fetching data:", error)
//       setIsLoading(false)

//     }
//   }

//   useEffect(()=>{
//     fetchData()
//     // Cleanup function to abort the request on component unmount
//     return () => {
//       console.log("...abort call")
//       controller.abort()
//     }
//   }, [])

//   if (isLoading) {
//     return <div>Loading...</div>
//   }
//   if (error) {
//     return <div>Error: {error}</div>
//   }
//   if (!data) {
//     return <div>No data found</div>
//   }
//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2> Example </h2>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         { data && data.map((item) => (
//           <li key={item.id} style={{ margin: "10px 0" }}>
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//           </li>
//         ))}
//       </ul>
      
      

//     </div>
//   )
// }

// export default QueryExample






// Promise used Data Fetching React Example.
// import React, { useEffect, useState } from 'react'
// function Axios() {
//     const[data, setData] = React.useState(null)
//     const [isLoading, setIsLoading] = React.useState(true)
//     const [error, setError] = React.useState(null)

//     const URL = 'https://jsonplaceholder.typicode.com/posts'
//     useEffect(() => {
//         fetch(URL)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setData(data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setIsLoading(false);
//             });
//     }, [URL]);

//     if (isLoading) {
//         return <div>Loading...</div>
//     }
//     if (error) {
//         return <div>Error: {error}</div>
//     }
//     if (!data) {
//         return <div>No data found</div>
//     }

//     // Render the data
//     return (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <h2> Axios Example </h2>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//                 {data && data.map((item) => (
//                     <li key={item.id} style={{ margin: "10px 0" }}>
//                         <h3>{item.title}</h3>
//                         <p>{item.body}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )

// }

// export default Axios









// //post request example fetch api.
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email })
//       });

//       const data = await response.json();
//       console.log('Server response:', data);
//       setResponseMsg('User created successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMsg('Error occurred while creating user.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Create User (with fetch)</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Name"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           required
//         /><br /><br />
        
//         <input 
//           type="email" 
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         /><br /><br />
        
//         <button type="submit">Submit</button>
//       </form>

//       {responseMsg && <p>{responseMsg}</p>}
//     </div>
//   );
// }

// // export default App;














// // Axios example post request
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();    

//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
//         name: name,
//         email: email
//       });

//       console.log('POST response:', response.data);
//       setResponseMsg('User created successfully!');
//     } catch (error) {
//       console.error('Error in POST:', error);
//       setResponseMsg('Failed to create user.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Create User (Axios POST)</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         /><br /><br />

//         <input 
//           type="email" 
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /><br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       {responseMsg && <p>{responseMsg}</p>}
//     </div>
//   );
// }

// // export default App;
