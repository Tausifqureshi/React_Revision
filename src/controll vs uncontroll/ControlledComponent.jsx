// ================================== controlled aur uncontrolled components ===================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me controlled aur uncontrolled components ke concept ko samajhna React forms aur user inputs handle karte waqt bahut zaroori hota hai. Dono ke beech ka farq yeh hai ki data ko kaise manage kiya jaata hai.


// =========================================== controlled components ============================================= //
// ChatGPT Se Liya Hua Syntex --->  Controlled Components.
// Controlled components wo hote hain jahan form inputs ka data React state ke zariye control kiya jata hai. Yani, input element ka value React ke state me stored hota hai aur input field ki value ko update karne ke liye setState function ka istemal hota hai.


import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
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