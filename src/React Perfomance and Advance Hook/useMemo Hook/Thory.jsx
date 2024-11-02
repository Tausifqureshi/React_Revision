// =============================================== UseMemo Hook ================================================== //
// ChatGPT Se Liya Hua Syntex ---> 1. useMemo hook kya hai.
// React ka useMemo hook ek aisa hook hai jo humein kisi calculation (ya function) ka result memoize (yaad) karne mein madad karta hai. Simple shabdon mein, useMemo ka use tab kiya jata hai jab humein koi complex ya heavy calculation baar-baar run nahi karwani ho. Yeh calculation ek baar run hokar result ko yaad (cache) rakh leti hai, aur agar koi dependency (jo hum specify karte hain) nahi badalti, toh React wahi result use karta hai bina calculation ko repeat kiye.

// ============================================= UseMemo Hook use ================================================ //
// ChatGPT Se Liya Hua Syntex --->  Kab aur kyun use karte hain. useMemo ka use tab hota hai jab:

// 1. Koi calculation costly ho (jaise loop, filter, ya map operation jo bade data set pe lagta ho).

// 2. Koi component baar-baar render ho raha ho unnecessary calculations ke wajah se.

// 3. Kisi value ko recompute karna time-consuming ho aur woh value tab tak same rahe jab tak specific dependencies nahi badalte.


// ====================================== UseMemo Hook Syntax aur usage ========================================== //
// ChatGPT Se Liya Hua Syntex ---> Syntax aur usage. useMemo ko use karne ka syntax kuch aisa hota hai:
// const memoizedValue = useMemo(() => {
//     // koi bhi heavy calculation yahan hogi
//     return result;
// }, [dependency1, dependency2]);



// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useMemo do arguments leta hai:

// 1. Pehla argument ek function hai jo wo calculation perform karega jise hume memoize karna hai.

// 2. Dusra argument ek array hai jisme dependencies list hoti hai. Ye dependencies batati hai ki kab calculation dobara perform karni hai.





// ========================================== UseMemo Hook  in action ============================================ //
// ChatGPT Se Liya Hua Syntex ---> useMemo in action.

// import React, { useMemo, useState } from 'react';

// function ExampleComponent() {
//     const [count, setCount] = useState(0);
//     const [items, setItems] = useState(["apple", "banana", "orange"]);

//     // Expensive calculation
//     const expensiveCalculation = useMemo(() => {
//         console.log("Running expensive calculation...");
//         return items.length * 1000;  // Suppose it's an expensive operation
//     }, [items]); // yeh sirf items ke change hone par retrun hoga

//     return (
//         <div>
//             <h1>Expensive Calculation Result: {expensiveCalculation}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>
//             <button onClick={() => setItems([...items, "grape"])}>Add Item</button>
//         </div>
//     );
// }

// export default ExampleComponent;




// 1. Is example mein expensiveCalculation ek calculated value hai jo ki items.length * 1000 ke barabar hai.

// 2. Jab hum count increment karte hain, yeh calculation dubara run nahi hoti kyunki useMemo mein sirf items dependency hai.

// 3. Sirf tab yeh calculation dubara hogi jab items update hoga, jaise jab hum naya item add karenge.




// ==================================== UseMemo Hook aayde aur limitations ======================================= //
// ChatGPT Se Liya Hua Syntex ---> 

// Faayde:
// 1. Performance improve hota hai kyunki unnecessary calculations avoid ho jati hain.
// 2. Agar component mein heavy calculations hain, toh useMemo se React optimize hota hai.

// Limitations:
// 1. Har chhoti calculation mein useMemo ka use nahi karna chahiye kyunki useMemo ka apna bhi overhead hota hai. Bas heavy calculations yaa baar-baar change hone wale data mein hi use karo.

// 2. Over-optimization se bachein, kyunki agar zaroorat nahi hai toh useMemo fayda ki jagah nuksaan bhi kar sakta hai.