
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


