
// import React, { useState } from "react";
//  function Checkbos() {
//   const [isChecked, setIsChecked] = useState(false);

//   function handleCheckboxChange(e) {
//     //  setIsChecked(e.target.checked);
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
//     </div>
//   );
// }

// export default Checkbos;
 




// import React, { useState } from "react";
// function  CheckBos() {
//   const [toggle, setToggle] =useState(false);
//   const [inputValue, setInputValue] =useState("");
//   const [showInput, setShowInput] = useState(true); // input dikh raha hai ya nahi

//   const inputToggle = () => {
//     //  Toggle to input 

//     // setInputValue((prevValue) => !prevValue);
//     // if (inputValue) {
//     //   setInputValue("");
//     // } else {
//     //   setInputValue("Default Value");
//     // }
//     setShowInput(!showInput);
//   };

//   return (
//     <>
//       {showInput && (
//         <input
//           type="text"
//           placeholder="Type something..."
//           width="100px"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//       )}

//       <button type="button" onClick={inputToggle}>
//         Toggle to input 
//       </button> <br /> <br /> <br />

//       <button type="button" onClick={() => setToggle(!toggle)}>
//         Click to text toggle 
//       </button>
//       {toggle ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
//     </>
//   );
// }

// export default CheckBos;




import React from 'react'

function Checkbos() {
  return (
    <div>Checkbos</div>
  )
}

export default Checkbos
