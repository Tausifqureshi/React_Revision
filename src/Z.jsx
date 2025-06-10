// import React, { useEffect, useState } from "react";

// const URL = "https://fakestoreapi.com/products";

// function Z() {
//   const [data, setData] = useState(null);
//   const [isError, setIsError] = useState(null);
//   const [seeToggle, setSeeToggle] = useState({}); // Initially an empty object

//   async function postData() {
//     try {
//       const fetchData = await fetch(URL);
//       if (!fetchData.ok) {
//         throw new Error(`Data not found on this page ${fetchData.status}`);
//       }
//       const responseData = await fetchData.json();
//       console.log(responseData);
//       setData(responseData);
//     } catch (error) {
//       console.log(error);
//       setIsError(error.message);
//     }
//   }

//   useEffect(() => {
//     postData();
//   }, []);

//   function seeMoreHandle(event) {
//    console.log("ID mil ri hai yaah se",event);
//     setSeeToggle((prevToggle) => ({
//       ...prevToggle,
//       [event]: !prevToggle[event], // Toggle the specific item by id
//     }));
//   }

//   if (isError) {
//     return <div>Error: {isError}</div>;
//   }

//   return (
//     <div className="main">
//       {data && (
//         <div className="container">
//           {data.map((item) => (
//             <div className="product" key={item.id}>
//               <img
//                 src={item.image}
//                 alt="item"
//                 style={{ height: "250px", width: "250px", objectFit: "contain" }}
//               />
//               <h5 className="title">{item.title.slice(0, 30)}</h5>
//               <p className="price">{item.price}</p>

//               {seeToggle[item.id] && (
//                 <p className="description">{item.description.slice(0, 50)}</p>
//               )}

//               <div className="btn">
//                 <button>Add Bag</button>
//                 <button onClick={() => seeMoreHandle(item.id)}>
//                   {seeToggle[item.id] ? "See Less" : "See More"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Z;



// react form hook 
// validtion --> yap library 

// import React, { useState } from 'react'



// LocalStorge use Array 
// import React, { useState , useEffect} from "react";
// function Z() {
// const [checkedItems, setCheckedItems] = useState(()=>{
//   const savedItems = localStorage.getItem("checkedItems");
//   return savedItems ? JSON.parse(savedItems) : [];
// });

//   const handleCheckboxChange = (e) => {
   
//     // const  {name, checked} = e.target; // Destructuring to get name and checked state
//     // setCheckedItems((prev) => {
//     //   if (checked) {
//     //     return [...prev, name]; // Add the name if checked
//     //   } else {
//     //     return prev.filter((item) => item !== name); // Remove the name if unchecked
//     //   }
//     // });


//     const { value, checked } = e.target;
//     setCheckedItems((prev) => {
//       if (checked) {
//         return [...prev, value]; // Add the value if checked
//       } else {
//         return prev.filter((item) => item !== value); // Remove the value if unchecked
//       }
//     });

   
//   };

//    // Save to localStorage
//     useEffect(() => {
//       localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
//     }, [checkedItems]);

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="item1"
//           value="HTML "
//           onChange={handleCheckboxChange}
//         />
//         Item 1
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="item2"
//         value="JavaScript"
//           onChange={handleCheckboxChange}
//         />
//         Item 2
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="item3"
//           onChange={handleCheckboxChange}
//           value="React"
//         />
//         Item 3
//       </label>
//       <div>

//            <h1> itme print {checkedItems.join(", ")}</h1>
//       </div>
//     </div>
//   );
// }
// export default Z;



// Local Storage use object based checkbox.
// import React, { useState, useEffect } from "react";

// function Z() {
//   const defaultValues = {
//     html: false,
//     css: false,
//     js: false,
//     react: false,
//   };

//   const [checkedItems, setCheckedItems] = useState(() => {
//     const saved = localStorage.getItem("checkedItems");
//     return saved ? JSON.parse(saved) : defaultValues;
//   });

//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setCheckedItems((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
//   }, [checkedItems]);

//   return (
//     <div>
//       <h2>🔘 Object Based</h2>

//       <label>
//         <input
//           type="checkbox"
//           name="html"
//           checked={checkedItems.html}
//           onChange={handleChange}
//         />
//         HTML
//       </label>
//       <br />

//       <label>
//         <input
//           type="checkbox"
//           name="css"
//           checked={checkedItems.css}
//           onChange={handleChange}
//         />
//         CSS
//       </label>
//       <br />

//       <label>
//         <input
//           type="checkbox"
//           name="js"
//           checked={checkedItems.js}
//           onChange={handleChange}
//         />
//         JavaScript
//       </label>

//       <p>
//         ✅ Checked Items:{" "}
//         {Object.entries(checkedItems)
//           .filter(([_, value]) => value)
//           .map(([key]) => key.toUpperCase())
//           .join(", ") || "None"}
//       </p>
//     </div>
//   );
// }

// export default Z;





//  z-stand --->  library 
// react query ---> data fetching library 