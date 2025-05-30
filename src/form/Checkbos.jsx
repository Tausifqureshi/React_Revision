// Handle To Checkbox component

// Lekin tere example me bhi galat nahi hai, kyunki setToggle(!toggle) ka matlab hai:
// Agar toggle true hai, to false ho jayega.
// Agar toggle false hai, to true ho jayega.
// Ye bhi toggle karne ka valid tarika hai, bas ye current state par dependent hai.

// import React, { useState } from "react";

// function CheckboxComponent() {
//     const [isChecked, setIsChecked] = useState(false);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     };

//     return (
//         <div>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                 />
//                 Check me!
//             </label>
//             {isChecked ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
//         </div>
//     );
// }

// export default CheckboxComponent;



// Lekin e.target.checked use karne ka fayda kya hai?
// More reliable: Actual DOM value se update karta hai.

// Asynchronous setState me issue nahi aata.

// Predictable behavior deta hai.

// import React, { useState } from "react";
//  function Checkbos() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

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
//     </div>
//   );
// }

// export default Checkbos;




// Multipal Checkbox Example

import React, { useState } from "react";
function CheckboxComponent() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
   
    const  {name, checked} = e.target; // Destructuring to get name and checked state
    setCheckedItems((prev) => {
      if (checked) {
        return [...prev, name]; // Add the name if checked
      } else {
        return prev.filter((item) => item !== name); // Remove the name if unchecked
      }
    });


    // const { value, checked } = e.target;
    // setCheckedItems((prev) => {
    //   if (checked) {
    //     return [...prev, value]; // Add the value if checked
    //   } else {
    //     return prev.filter((item) => item !== value); // Remove the value if unchecked
    //   }
    // });
  };

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
        {/* {Object.entries(checkedItems).map(([key, value]) => (
          <p key={key}>{`${key} is ${value ? "checked" : "unchecked"}`}</p>
        ))} */}

           <h1> itme print {checkedItems.join(", ")}</h1>
      </div>
    </div>
  );
}
export default CheckboxComponent;














// const [checkedItems, setCheckedItems] = useState({
//   option1: false,
//   option2: false,
// });

// const handleChange = (e) => {
//   const { name, checked } = e.target;
//   setCheckedItems(prev => ({
//     ...prev,
//     [name]: checked,
//   }));
// };

// return (
//   <>
//     <label>
//       <input
//         type="checkbox"
//         name="option1"
//         checked={checkedItems.option1}
//         onChange={handleChange}
//       />
//       Option 1
//     </label>

//     <label>
//       <input
//         type="checkbox"
//         name="option2"
//         checked={checkedItems.option2}
//         onChange={handleChange}
//       />
//       Option 2
//     </label>
//   </>
// );
