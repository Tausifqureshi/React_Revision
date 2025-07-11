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




// import React, { useState } from 'react';
// function RadioButton(e) {
//   const [selectedOption, setSelectedOption] = useState('Option 1');
//   const [optionSelect, setOptionSelect] = useState("");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // alert(`You have selected: ${selectedOption}`);
//     setOptionSelect(selectedOption)
//   };

//   return (
// <form onSubmit={handleSubmit}> 

// <h2>Select an option:</h2>

// <input type="radio" name="option" value="Option 1" checked={selectedOption === 'Option 1'} onChange={handleOptionChange} /> <label>Option 1</label>

// <input type="radio" name="option" value="Option 2" checked={selectedOption === 'Option 2'} onChange={handleOptionChange} /> <label>Option 2</label>


// <input type="radio" name="option" value="Option 3" checked={selectedOption === 'Option 3'}onChange={handleOptionChange} /> <label>Option 3</label>

// <p>You have selected: {optionSelect}</p>

//  <br /> <br /> 
// <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default RadioButton;







// Object Best Practices
// import React, { useState, useEffect } from "react";

// ChatGPT --->  ❓Interviewer: formData.fruit ka kya matlab hai?
// ✅Answer (Short & Smart):
// 1. "formData ek object hai jo form ka data store karta hai.
// 2. fruit uska key hai, jisme selected fruit ka value hota hai — jaise 'apple', 'banana' ya 'mango'.
// 3. Toh formData.fruit batata hai user ne konsa radio option select kiya."

//  ChatGPT ---> Extra 1-liner (agar poocha jaye: kyun aise likha?)
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

//    <p>Selected fruit: {formData.fruit}</p>

// ❓ formData.fruit hi kyun likhte hain?
// ✅ Short Answer:
// formData ek object hai
// fruit uska key hai
// formData.fruit se value milti hai (e.g. "mango")
// 👉 Agar aap sirf {formData} likhoge, to milega [object Object] ❌
// 👉 Isliye hum likhte hain {formData.fruit} ✅


//     </div>
//   );
// }

// export default Z;





// multiple radio button example string ke sath use. 
import React, { useState, useEffect } from "react";
function RadioButton() {
//   const [selectedOption, setSelectedOption] = useState(""); // initially koi select nahi
const [selectedOption, setSelectedOption] = useState(() => {
  return localStorage.getItem("selectedOption") || "";
  // Yeh ek function hai, lekin yeh sirf ek baar useState() ke initial value set karne ke liye chalti hai (matlab page load hone par). Iska fayda yeh hai ki agar tu direct likhe. toh bhi kaam karega — lekin dikkat yeh hai ki agar component baar-baar render ho raha hai aur agar tu direct expression likhta hai, to localStorage.getItem() har baar chalega (even jab uski zarurat nahi hai).

// 1. ✅ Function diya to sirf ek baar chalega (initial render par).
// 2. ❌ Direct likha to har render par evaluate hoga, jo avoid karte hain hum.

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

export default RadioButton;