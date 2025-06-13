
// import React, { useState } from "react";
//  function Checkbos() {
//   const [isChecked, setIsChecked] = useState(false);
//   // const myFirstName = "John"

//   function handleCheckboxChange(e) {
//     //  setIsChecked(e.target.checked); // toggle e.target.checked use kar ke
//     setIsChecked((prev) => !prev); // Toggle the state
//    }

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//         Check me!
//       </label>
//       {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    // <h1>{isChecked.toString()}</h1> 
//     </div>
//   );
// }

// export default Checkbos;
 




import React, { useState } from "react";
function  CheckBos() {
  const [toggle, setToggle] =useState(false);
  const [inputValue, setInputValue] =useState("");
  const [showInput, setShowInput] = useState(true); // input dikh raha hai ya nahi

  const inputToggle = (e) => {
    //  Toggle to input 
    // setShowInput(!showInput);
    setShowInput(e.target.checked);
  };

  return (
    <>
      {showInput && (
        <input
          type="text"
          placeholder="Type something..."
          width="100px"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      {/* yaha button se toggle kar rahe hai */}
      {/* <button type="button" onClick={inputToggle}>
        Toggle to input 
      </button>  */}

      {/* yaha input se toggle kar rahe hai */}
      <label htmlFor=" toggle"> Toggle to input </label>
      <input type="checkbox" name="" id="toggle" checked={showInput} onChange={inputToggle}/>
      <br /> <br /> <br />

      <button type="button" onClick={() => setToggle(!toggle)}>
        Click to text toggle 
      </button>
      {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    </>
  );
}

export default CheckBos;








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
  // <p>Selected Items: {Object.keys(checkedItems).map((item) => item.toUpperCase()).join(", ")} </p>
  
//     </div>
//   );
// }

// export default Z