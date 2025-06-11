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
function RadioButton(e) {
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

export default RadioButton;







// Object Best Practices

// import React, { useState, useEffect } from "react";
// ChatGPT --->  ❓Interviewer: formData.fruit ka kya matlab hai?
// ✅Answer (Short & Smart):
// "formData ek object hai jo form ka data store karta hai.
// fruit uska key hai, jisme selected fruit ka value hota hai — jaise 'apple', 'banana' ya 'mango'.
// Toh formData.fruit batata hai user ne konsa radio option select kiya."

// 💡 Extra 1-liner (agar poocha jaye: kyun aise likha?)
// "Radio buttons same name share karte hain, aur selected value formData.fruit me store hoti hai via onChange."


// // function Z() {
//   const [formData, setFormData] = useState(() => {
//     const saved = localStorage.getItem("formData");
//     return saved ? JSON.parse(saved) : {};
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(formData));
//   }, [formData]);

//   return (
//     <div>
//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="apple"
//           checked={formData.fruit === "apple"}
//           onChange={handleChange}
//         />
//         Apple
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="banana"
//           checked={formData.fruit === "banana"}
//           onChange={handleChange}
//         />
//         Banana
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="fruit"
//           value="mango"
//           checked={formData.fruit === "mango"}
//           onChange={handleChange}
//         />
//         Mango
//       </label>

//       <p>Selected fruit: {formData.fruit}</p>
//     </div>
//   );
// }

// export default Z;





// multiple radio button example string ke sath use bro. 
import React, { useState, useEffect } from "react";

function Z() {
//   const [selectedOption, setSelectedOption] = useState(""); // initially koi select nahi
const [selectedOption, setSelectedOption] = useState(() => {
  return localStorage.getItem("selectedOption") || "";
});


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

//   Save data in local storage
  useEffect(() => {
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <label>
        <input
          type="radio"
          name="fruit"
          value="apple"
          checked={selectedOption === "apple"}
          onChange={handleChange}
        />
        Apple
      </label>

      <label>
        <input
          type="radio"
          name="fruit"
          value="banana"
          checked={selectedOption === "banana"}
          onChange={handleChange}
        />
        Banana
      </label>

      <label>
        <input
          type="radio"
          name="fruit"
          value="mango"
          checked={selectedOption === "mango"}
          onChange={handleChange}
        />
        Mango
      </label>

      <p>Selected fruit: {selectedOption}</p>
    </div>
  );
}

// export default Z;

