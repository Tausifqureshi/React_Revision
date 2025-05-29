// import React, { useEffect } from 'react'

// function QueryExample() {
//   const [data, setData] = React.useState(null)
//   const [isLoading, setIsLoading] = React.useState(true)
//   const [error, setError] = React.useState(null)
//   const URI = "https://jsonplaceholder.typicode.com/posts"
//   useEffect(() => { 
//     fetch(URI).then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     }).then((data) => {
//       setData(data)
//       setIsLoading(false)
//     }).catch((error) => {
//       setError(error.message)
//       setIsLoading(false)
//     })
// // 
//     }, [])
//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
     
//       {/* {data&& data.length > 0 ? (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No data available</p>
//       )} */}


//       {data && data.length === 0 ? (
//         <p>No data available</p>
//       ) : (
//         <ul>
//           {data && data.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )} 
//     </div>
//   )
// }

// export default QueryExample












import React from 'react'

function QueryExample() {
  let age = 20;
  return (
    <div>
      <button>{age > 18 ? "Adult" : "Minor"}</button>
    </div>
  )
}

export default QueryExample