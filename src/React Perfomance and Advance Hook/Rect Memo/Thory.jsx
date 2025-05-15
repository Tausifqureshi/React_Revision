// ============================================== React.Memo ================================================= //
// ChatGPT Se Liya Hua Syntex ---> React.memo ek higher-order component (HOC) hai jo React mein functional components ke performance ko improve karne ke liye use hota hai. Yeh mainly tab useful hota hai jab aapka component baar-baar render ho raha ho bina kisi zarurat ke, aur aap is render ko avoid karna chahte ho.

// ========================================== React.memo Kya Hai ============================================= //
// ChatGPT Se Liya Hua Syntex ---> React.memo Kya Hai?
// React mein, jab parent component re-render hota hai toh uske saare child components bhi re-render hote hain, chahe unke props change hue ho ya nahi. Yeh behavior unnecessarily performance pe asar daal sakta hai. Is problem ko solve karne ke liye, React.memo ko use kiya jata hai.

// React.memo ek higher-order component hai jo functional components ke liye shallow comparison perform karta hai. Agar component ke props mein koi change nahi hai, toh React.memo us component ko re-render hone se rokta hai aur last rendered output ko use karta hai.



// =================================== Kaise Kaam Karta Hai React.memo  ====================================== //
// ChatGPT Se Liya Hua Syntex ---> Kaise Kaam Karta Hai React.memo

// 1. Jab aap React.memo ko kisi functional component pe apply karte hain, toh React pehli baar component ko render karta hai aur uska output store kar leta hai.

// 2.Jab bhi parent component dubara render hota hai, toh React ye check karta hai ki kya props mein koi changes hain.

// 3.Agar props mein koi change nahi hota (shallow comparison ke hisaab se), toh React.memo component ko re-render hone se rokta hai.

// 4. Agar props mein koi change hota hai, toh component re-render hota hai aur naye output ko store kiya jata hai.



// ========================================= React.Memo Ka Usage ============================================ //
// ChatGPT Se Liya Hua Syntex ---> React Memo ka Usage
// React Memo use karne ke kuch common scenarios hain:

// 1. Pure Functional Components: Jab aapka component sirf props ke basis par render ho aur koi internal state ya side effects na ho, tab React.memo ko use karna useful hota hai.

// 2. Heavy Components: Agar aapka component computationally expensive ya heavy hai, toh React.memo ke sath use karna efficient ho sakta hai.

// 3. Static Props: Agar component ko pass kiye gaye props static hain aur rarely change hote hain, toh React.memo se re-renders ko avoid kiya ja sakta hai.


// ========================================= React.Memo Ka Usage ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Kab Use Karna Chahiye:
// 1. Agar component frequently re-render ho raha hai aur props me change nahi ho rahe.

// 2. Heavy components jo re-render hone me time lete hain.

// 3. Child components jo parent ke re-render hone par bina wajah re-render ho rahe hain, lekin unke props change nahi ho rahe.

// ======================================== React.Memo Limitations =========================================== //
// ChatGPT Se Liya Hua Syntex ---> React.memo ke Benefits aur Limitations:
// 1. Benefits: Ye performance ko improve karta hai, especially jab unnecessary re-renders ko avoid karna ho.

// 2. Limitations: Agar props ke andar deep nested objects hain, ya arrays hain jo har render me nayi reference lete hain, to ye re-render ko avoid nahi kar sakta. Isme shallow comparison hoti hai.

 
import React, { useState } from 'react';

// ✅ React.memo ek Higher Order Componeznt hai
// 👇 Ye Child component ko wrap karta hai aur tabhi re-render hone deta hai jab props change ho
const Child = React.memo(function Child({ name }) {
  console.log("👶 Child component rendered"); // ✅ Sirf tab chalega jab props me change ho
  return <p>Hello, {name}</p>;
  // 👆 Ye rendered JSX ko React.memo return karta hai — ye memoized version hota hai
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* ✅ Child component ko same prop mil raha hai (name="Amit") */}
      {/* ❌ Agar React.memo nahi hota to Child har baar re-render hota */}
      <Child name="Amit" />
    </div>
  );
}

export default Parent;
