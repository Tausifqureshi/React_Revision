// =============================================== React useRef ================================================== //
// ChatGPT Se Liya Hua Syntex ---> useRef React.js ka ek hook hai jo aapko mutable reference object create karne ki suvidha deta hai. Ye object component ki puri lifecycle ke dauran persist karta hai, bina re-render ke effect hue. Iska pramukh upyog DOM elements ya kisi bhi mutable value ko reference karne ke liye hota hai jo component ki renderings ke beech change ho sakti hai bina component ko re-render kiye.

// ========================================== useRef ke Main Points: ============================================= //
// ChatGPT Se Liya Hua Syntex ---> useRef ke Main Points:

// 1. DOM Access: useRef ka pramukh use case DOM elements ko directly access karna hai. Aap useRef ka upyog ek DOM element ke saath ref attribute set karne ke liye kar sakte hain, jisse us element ki current DOM node ko directly access kiya ja sake.

// 2. Mutable Value: useRef ka ek aur important use case aisi mutable value ko store karna hai jise change kiya ja sakta hai bina component ko re-render kiye. Ye ek normal variable jaisa hi hota hai, lekin ye re-renders ke beech persist karta hai.

// 3. Persistent Object: useRef hook ek aisa object return karta hai jisme ek current property hoti hai. Ye property initial render ke baad update ho sakti hai bina re-rendering trigger kiye.

// 4. State vs Ref: useRef ka upyog us situations mein hota hai jaha aapko ek value ko preserve karna hota hai bina re-rendering trigger kiye, jabki useState har bar render cycle ke dauran value ko re-calculate karta hai aur re-render trigger karta hai.



// ChatGPT Se Liya Hua Syntex ---> Example: DOM Element ko Refer karna.
// import React, { useRef, useEffect } from 'react';

// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);

//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </div>
//   );
// }

// export default TextInputWithFocusButton;





// Example: Mutable Value Ko Refer Karna.
// import React, { useRef, useState } from 'react';

// function Timer() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const incrementCount = () => {
//     countRef.current += 1;
//     setCount(countRef.current);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// export default Timer;

