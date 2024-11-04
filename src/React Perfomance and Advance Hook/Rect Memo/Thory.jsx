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

const Counter = React.memo(({ count }) => {
    console.log('Counter re-render');
    return <div>Count: {count}</div>;
});

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <Counter count={count} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something" 
            />
        </div>
    );
}

export default App;



// Is example me:

// 1. Counter component ko React.memo se wrap kiya gaya hai.

// 2. Jab aap button click karte hain aur count update hota hai, tab Counter re-render hoga kyunki count me change aaya hai.

// 3. Lekin jab aap input field me kuch type karte hain, toh Counter re-render nahi hoga kyunki count prop me koi change nahi aaya hai.