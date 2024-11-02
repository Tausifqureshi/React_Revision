// =========================================== UseCallbACK Hook ============================================== //
// ChatGPT Se Liya Hua Syntex ---> React me useCallback ek hook hai jo ki functions ko memoize karne ke liye use hota hai. Iska matlab ye hai ki agar ek specific function baar-baar create ho raha hai aur uski dependencies change nahi ho rahi hain, toh useCallback use karke hum us function ko cache kar sakte hain. Isse React unnecessary re-renders se bachata hai aur performance ko improve karta hai.




// ======================================= UseCallbACK Hook Syntax ========================================== //
// ChatGPT Se Liya Hua Syntex --->  Yahan useCallback do arguments leta hai:

// 1. Pehla argument ek function hai jo aapko memoize karna hai.

// 2. Dusra argument ek array hai jo dependencies define karta hai. Jab tak ye dependencies nahi badalte, function dobara recreate nahi hota.

// const memoizedCallback = useCallback(() => {
//   // function body
// }, [dependencies]);



// ================================ UseCallbACK Hook Kab Use Karna Chahiye =================================== //
// ChatGPT Se Liya Hua Syntex ---> Kab Use Karna Chahiye. 
// Jab kisi function ko baar-baar recreate hone se rokna ho, jo unnecessary renders aur performance issues ko avoid karta hai, tab useCallback ka use hota hai. Jaise agar aapka component kisi child component ko pass kar raha hai jo function prop ki tarah use ho raha hai, toh us case me agar function baar-baar recreate hoga toh child component bhi baar-baar render hoga.


// import React, { useState, useCallback } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   const handleDecrement = useCallback(() => {
//     setCount((prevCount) => prevCount - 1);
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;





