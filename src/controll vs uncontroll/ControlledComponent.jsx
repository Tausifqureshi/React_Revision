// ================================== controlled aur uncontrolled components ===================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me controlled aur uncontrolled components ke concept ko samajhna React forms aur user inputs handle karte waqt bahut zaroori hota hai. Dono ke beech ka farq yeh hai ki data ko kaise manage kiya jaata hai.

// =========================================== controlled components ============================================= //
// ChatGPT Se Liya Hua Syntex --->  Controlled Components.
// Controlled components wo hote hain jahan form inputs ka data React state ke zariye control kiya jata hai. Yani, input element ka value React ke state me stored hota hai aur input field ki value ko update karne ke liye setState function ka istemal hota hai.

import React, { useState } from "react";

function ControlledComponent() {

  console.log("Components re-render");

  // Create All useState.
  const [inputValue, setInputValue] = useState("");
  // const [fullName, setFullName] = useState(""); // is state ko create kiya bina bhi full name ki value print karwa sakte hai.
  const fullName = inputValue; // jise state create karne se full name ki value change hori ti componets re-render hote hai same yahi kaam variable create kar ke bhi full name ki value change hogi jab components re-render hoga. re-render means clg karwaye hai upper.


  // Handle Input Function.
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };


  // Submit Function.
  const onSubmited = () => {
    console.log("Submited Form");

    // setFullName(inputValue); // setFullName me jo inputValue ane wali hai hamne us se hi setFullName me pass kiya tab hi o <h1>{fullName}</h1> me show hogi.

    setInputValue(""); // is se jab aap form submit karoge, to input ki value empty ho jayegi, aur input field clear ho jayega. Yeh best practice hai jab aap user se new data lena chahte ho after form submission.
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        {/* Input Value: {fullName.toUpperCase()} */}
        Input Value: {fullName}

      </h1>
      {/* Jab bhi submit pe click tab ye value ake yaha print hogi toUpperCase Wali. */}

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        onClick={onSubmited}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ControlledComponent;

// Explanation:

// 1. value attribute ko React state se bind kiya gaya hai (inputValue).
// 2. onChange event handler har baar input me change aane par state ko update karta hai.
// 3. Input ka value sirf React state ke zariye hi update hota hai, isliye isko controlled component kehte hain.

// ============================================== Kab Use Kon Sa ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Kab Kaunsa Component Use Karna Chahiye.

// 1. Controlled Components: Agar aapko form ke har input par control chahiye, jaise ki validation, conditional rendering, ya phir state ko synchronize karna, toh controlled component best choice hai.

// 2. Uncontrolled Components: Agar aapko ek simple form banana hai aur inputs ka tracking karne ki zaroorat nahi hai, ya phir performance critical hai jahan har keystroke par re-rendering nahi chahiye, toh uncontrolled component use karna acha hai.
