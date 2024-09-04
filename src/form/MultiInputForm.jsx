// ===================================== React.js me multiple input fields ======================================= //
// ChatGPT Se Liya Hua Syntex ---> React.js me multiple input fields ko ek hi function se handle karna efficient hai, aur ye approach "controlled components" concept ke through kiya jata hai. Is method me, har input field ki value ko React state ke through manage kiya jata hai, aur sabhi inputs ke onChange event ko ek common handler function ke saath bind kiya jata hai.

// ========================================= Step-by-Step Explanation ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Step-by-Step Explanation.
// State Setup: Pehle, aapko form ke sabhi fields ka state manage karna padega. Aap ek object use kar sakte hain jisme har field ka ek key-value pair ho.

// 2. Handle Change Function: handleChange function ko define karna hoga jo input fields se changes ko handle karega. Yeh function form ke har input field ke name attribute ke basis par formData ko update karega.

// Is function mein:
// e.target se field ka name aur value extract kar rahe hain.
// setFormData ko call kar ke formData object ko update kar rahe hain, jahan [name]: value syntax se formData mein relevant field ko update kar rahe hain.

// 3. Form Submission: Form submit hone par handleSubmit function call hota hai jo formData ko process karta hai. Aap is function mein formData ko console par print kar sakte hain ya server par send kar sakte hain.


import React, { useState } from "react";
import PreviousState from "../useState/PreviousState";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // console.log(event.target);
    // console.log(event.target.value);
    // console.log(event.target.name);
     
    // setFormData({ ...formData, [name]: value,}); // computed property use hori hai [name] . formData object ki saari properties ko nayi object mein copy kar rega spread operator (...) ka use kar ke.


 setFormData((PreviousState)=>{ //is tara se bhi kar sakte state change multipul input field ki value.
  return {...PreviousState, [event.target.name]: event.target.value}
 })
 console.log(event.target);
  console.log(event.target.name);
  console.log(event.target.value);
  };

  
  
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };




  //  FormData me se.
  const {firstName, lastName, email, password,} = formData; 
  return (
    <form onSubmit={handleSubmit}>
        <h1> Multiple Input Field Handle One Function Handle </h1>
      <div>
        <label>
          First Name:
          {/*FormData me se Destructuring use tu aisa hi firstName Print */}
          <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />

          {/* <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} /> */}
        </label>

      </div>

      <div>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
        </label>
      </div>
  
      <div>   
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input  type="password"  name="password"  value={formData.password} onChange={handleInputChange} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
