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


// const Z = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div>
//     <h1>Hello</h1>
//     {/* <input type="checkbox" name="" id="" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}/> */}
//     <input type="checkbox" name="" id="" checked={isChecked} onChange={(e)=>setIsChecked(!isChecked)}/>

//     <h1>{isChecked.toString()}</h1>
//     <h1>{isChecked ? "Yes" : "No"}</h1>
    

//     </div>
//   )
// }

// export default Z 



import React, { useState , useEffect} from "react";
function Z() {
const [checkedItems, setCheckedItems] = useState(JSON.parse(localStorage.getItem("checkedItems")) || []);

  const handleCheckboxChange = (e) => {
   
    // const  {name, checked} = e.target; // Destructuring to get name and checked state
    // setCheckedItems((prev) => {
    //   if (checked) {
    //     return [...prev, name]; // Add the name if checked
    //   } else {
    //     return prev.filter((item) => item !== name); // Remove the name if unchecked
    //   }
    // });


    const { value, checked } = e.target;
    setCheckedItems((prev) => {
      if (checked) {
        return [...prev, value]; // Add the value if checked
      } else {
        return prev.filter((item) => item !== value); // Remove the value if unchecked
      }
    });

   
  };

   // Save to localStorage
    useEffect(() => {
      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
    }, [checkedItems]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="item1"
          value="HTML "
          onChange={handleCheckboxChange}
        />
        Item 1
      </label>

      <label>
        <input
          type="checkbox"
          name="item2"
        value="JavaScript"
          onChange={handleCheckboxChange}
        />
        Item 2
      </label>

      <label>
        <input
          type="checkbox"
          name="item3"
          onChange={handleCheckboxChange}
          value="React"
        />
        Item 3
      </label>
      <div>

           <h1> itme print {checkedItems.join(", ")}</h1>
      </div>
    </div>
  );
}
export default Z;


//  z-stand --->  library 
// react query ---> data fetching library 