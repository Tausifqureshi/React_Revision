// ================================== controlled aur uncontrolled components ===================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me controlled aur uncontrolled components ke concept ko samajhna React forms aur user inputs handle karte waqt bahut zaroori hota hai. Dono ke beech ka farq yeh hai ki data ko kaise manage kiya jaata hai.

// ========================================= uncontrolled components ============================================= //
// ChatGPT Se Liya Hua Syntex --->  Uncontrolled Components.
// Uncontrolled components me input element ka data directly DOM ke zariye manage hota hai. Yani, React state ka istemal nahi kiya jata, balki ref ke zariye DOM se directly input value ko access kiya jata hai.

import React, { useRef } from "react";

function Uncontroll() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Uncontroll;


// Explanation:

// 1. ref ka istemal karke input element ko directly DOM se refer kiya jata hai.

// 2. Input field ka data React state me nahi hota, balki form submit hone par inputRef.current.value se directly access kiya jata hai.

// 3. Kyunki isme React state involve nahi hota, isliye isko uncontrolled component kehte hain.






// ============================================== Kab Use Kon Sa ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Kab Kaunsa Component Use Karna Chahiye.

// 1. Controlled Components: Agar aapko form ke har input par control chahiye, jaise ki validation, conditional rendering, ya phir state ko synchronize karna, toh controlled component best choice hai.

// 2. Uncontrolled Components: Agar aapko ek simple form banana hai aur inputs ka tracking karne ki zaroorat nahi hai, ya phir performance critical hai jahan har keystroke par re-rendering nahi chahiye, toh uncontrolled component use karna acha hai.