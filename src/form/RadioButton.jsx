// import React, { useState } from "react";

// function RadioButton() {
//   const [selectedOption, setSelectedOption] = useState("option1");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <>
//       <div>
//         <h2>Select an option:</h2>
//         <label>
//         <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange}
//           />
//           Option 1
//         </label>

//         <label>
//           <input
//         type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange}
//           />
//           Option 2
//         </label>

//         <label>
//          <input  type="radio" value="option3" checked={selectedOption === "option3"} onChange={handleOptionChange}
//           />
//           Option 3
//         </label>

//         <p>You have selected: {selectedOption}</p>
//       </div>
//     </>
//   );
// }

// export default RadioButton;




import React, { useState } from 'react';

function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [optionSelect, setOptionSelect] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`You have selected: ${selectedOption}`);
    setOptionSelect(selectedOption)
  };

  return (
<form onSubmit={handleSubmit}> 

<h2>Select an option:</h2>

<input type="radio" name="option" value="Option 1" checked={selectedOption === 'Option 1'} onChange={handleOptionChange} /> <label>Option 1</label>

<input type="radio" name="option" value="Option 2" checked={selectedOption === 'Option 2'} onChange={handleOptionChange} /> <label>Option 2</label>


<input type="radio" name="option" value="Option 3" checked={selectedOption === 'Option 3'}onChange={handleOptionChange} /> <label>Option 3</label>

<p>You have selected: {optionSelect}</p>

 <br /> <br /> 
<button type="submit">Submit</button>
    </form>
  );
}

export default RadioButtonExample;













// multiple radio button example
// import React, { useState } from "react";

// function RadioExample() {
//   const [selectedOption, setSelectedOption] = useState(""); // initially koi select nahi

//   const handleChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="apple"
//           checked={selectedOption === "apple"}
//           onChange={handleChange}
//         />
//         Apple
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="banana"
//           checked={selectedOption === "banana"}
//           onChange={handleChange}
//         />
//         Banana
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="mango"
//           checked={selectedOption === "mango"}
//           onChange={handleChange}
//         />
//         Mango
//       </label>

//       <p>Selected fruit: {selectedOption}</p>
//     </div>
//   );
// }

// export default RadioExample;
