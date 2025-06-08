// ============================================= UseMemo Hook ================================================ //
// ChatGPT Se Liya Hua Syntex ---> useMemo Hook React me performance optimize karne ke liye use hota hai. Iska kaam ye hai ki agar aapke component me koi heavy computation ho raha ho ya koi function baar-baar re-render ho raha ho jabki values same hain, toh useMemo us computation ko "memoize" karke store kar leta hai aur sirf tab dobara calculate karta hai jab dependencies change hoti hain.

// =========================================== UseMemo Hook use ============================================== //
// ChatGPT Se Liya Hua Syntex ---> useMemo ka Use Case
// Maan lo ki aapke paas ek component hai jo kisi heavy calculation ko perform karta hai aur har render par yeh calculation fir se run ho rahi hai. Iska impact performance pe ho sakta hai, especially agar aapke component ke andar complex logic ya large dataset ho. Aise case me aap useMemo ka use kar sakte hain taaki computation sirf tabhi ho jab zaroori ho.


// ==================================== UseMemo Hook Syntax aur usage ======================================== //
// ChatGPT Se Liya Hua Syntex ---> Syntax aur usage. useMemo ko use karne ka syntax kuch aisa hota hai:

// const memoizedValue = useMemo(() => {
//     // koi bhi heavy calculation yahan hogi
//     return result;
// }, [dependency1, dependency2]);


// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useMemo do arguments leta hai:

// 1. Pehla argument ek function hai jo wo calculation perform karega jise hume memoize karna hai.

// 2. Dusra argument ek array hai jisme dependencies list hoti hai. Ye dependencies batati hai ki kab calculation dobara perform karni hai.


// =================================== Kab useMemo ka Use Karna Chahiye ====================================== //
// ChatGPT Se Liya Hua Syntex ---> Kab useMemo ka Use Karna Chahiye.

// 1. Jab aapke pass koi heavy computation ho jo bar-bar re-run nahi hona chahiye.

// 2. Agar aap kisi array ya object ko re-rendering ke dauran stable rakhna chahte hain taaki unnecessary renders se bacha ja sake.





// ================================== useCallback aur useMemo mein fark: ===================================== //
// ChatGPT Se Liya Hua Syntex ---> useCallback aur useMemo mein fark:

// Purpose:
// 1. useCallback sirf functions ke reference ko memoize karta hai.
// 2. useMemo kisi bhi value ya expression ka result memoize karta hai (specifically for expensive calculations).


// Return Type:
// 1. useMemo: Ye ek value return karta hai.
// 2. useCallback: Ye ek memoized function return karta hai.



// Use-case:
// 1. useCallback tab use hota hai jab aap kisi function ka reference stable rakhna chahte hain, mainly child components ko pass karte time.

// 2. useMemo tab use hota hai jab aap kisi expensive calculation ko memoize karna chahte hain taaki baar-baar calculate na ho.


// import React, { useState, useMemo } from 'react';
   
// function ExpensiveCalculationComponent() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState('');

//   // 🚨 Ye heavy calculation hai, baar-baar nahi karna chahte
//   const expensiveCalculation = (num) => {
//     console.log("⏳ Calculating...");
//     for (let i = 0; i < 1000000000; i++) {} // Dummy loop to simulate slowness
//     return num * 2; // 👈 Ye ACTUAL VALUE return ho rahi hai function se
//   };

//   // ✅ useMemo ek VALUE return karta hai — yahan pe expensiveCalculation ka result
//   const memoizedValue = useMemo(() => {
//     // 👇 Ye VALUE return ho rahi hai useMemo se (sirf jab count change ho)
//     return expensiveCalculation(count);
//   }, [count]); // 🔁 Re-run only if count changes

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       {/* 👇 Yahan memoized VALUE render ho rahi hai */}
//       <p>Expensive Calculation Result: {memoizedValue}</p>

//       <button onClick={() => setCount(count + 1)}>Increment Count</button>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }

// export default ExpensiveCalculationComponent;

