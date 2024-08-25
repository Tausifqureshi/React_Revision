// ============================================ Raect previousState ============================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me previousState ka use karna bahut important hota hai jab aap state update karte ho, aur wo bhi aise situations me jab aapko ensure karna hota hai ki aap latest state se hi update kar rahe ho.

// =========================================== previousState Kya Ha ============================================== //
// ChatGPT Se Liya Hua Syntex ---> previousState Kya Hai:
// previousState ko aap aise samajh sakte ho ki yeh state ka wo value hai jo update hone se pehle tha. Jab aap state update karte ho React me, to aap direct naya value bhi pass kar sakte ho ya ek function bhi pass kar sakte ho jo previousState ko use karke state ka naya value calculate karta hai.

// ========================================== previousState Kab Use ============================================== //
// ChatGPT Se Liya Hua Syntex ---> previousState Kab Use Karte Hain:
// 1. Concurrent Updates: Agar aap multiple state updates ek hi waqt par kar rahe ho, to direct count (ya kisi bhi state value) ko update karna risky ho sakta hai. Kyunki React batching ka use karta hai aur state update asynchronous ho sakte hain, isliye aapko kabhi kabhi pehle wala state mil sakta hai, na ki latest updated state.

// 2.i State Updates: Jab aapko state ko update karna ho aur wo purane state ke value par depend karta ho, tab previousState ka use karke aap ensure kar sakte ho ki aap latest state se hi update kar rahe ho.

// ========================================== previousState Ka Fayda ============================================= //
// ChatGPT Se Liya Hua Syntex ---> previousState ka Fayda:

// 1. Correctness Ensure Karna: Agar multiple updates ek saath ho rahe hain, to previousState ka use aapko correct aur expected results deta hai.

// 2. React's Optimizations: React state updates ko batch kar sakta hai ya delay kar sakta hai. previousState ka use karke, aap ye ensure karte ho ki aap correct aur latest value ke sath state update kar rahe ho, chahe React ka internal mechanism jo bhi ho.

// Counter Application Create with useState using.
import React, { useState } from "react";
import "./counter.css";

function PreviousState() {
  console.log("Component render");
  const [count, setCounter] = useState(0);

  //   const increaseCount = () => {
  //     setCounter((previousState) => previousState + 1);
  //   };

  const decreaseCount = () => {
    setCounter((previousState) => previousState - 1);
  };

  return (
    <>
      <h3>Current count: {count}</h3>
      <div className="container">
      
      {/* PreviousState use in inline function create */}
     <button onClick={() => { setCounter((previousState) => previousState + 1);}}> Increase</button>


        {/* <button onClick={increaseCount}>Increase</button> */}
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default PreviousState;
