// ============================================== React.Memo ================================================= //
// ChatGPT Se Liya Hua Syntex --->  React Memo ek higher-order component (HOC) hai jo functional components ke liye re-rendering ko optimize karne me madad karta hai. Agar aapke paas ek functional component hai jo baar-baar re-render ho raha hai bina kisi prop ya state ke change ke, toh React.memo use karna ek accha option ho sakta hai.


// =================================== Kaise kaam karta hai React Memo= ====================================== //
// ChatGPT Se Liya Hua Syntex ---> Kaise kaam karta hai React Memo.
// Jab hum kisi component ko React.memo me wrap karte hain, toh React us component ko sirf tab re-render karega jab uske props me koi change aata hai. Ye optimization React ke "shallow comparison" par adharit hai, jo sirf primitive types (jaise strings, numbers) ko compare karta hai. Agar props me koi object ya array pass kar rahe hain, toh React unhe sirf reference ke basis par compare karta hai, na ki unke values ke.



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

// ========================================= React.Memo Ka Usage ============================================ //
// ChatGPT Se Liya Hua Syntex ---> React.memo ke Benefits aur Limitations:
// 1. Benefits: Ye performance ko improve karta hai, especially jab unnecessary re-renders ko avoid karna ho.

// 2. Limitations: Agar props ke andar deep nested objects hain, ya arrays hain jo har render me nayi reference lete hain, to ye re-render ko avoid nahi kar sakta. Isme shallow comparison hoti hai.


// const ParentComponent = () => {
//     const [count, setCount] = React.useState(0);
//     const data = { value: "Hello World" };
  
//     return (
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <MemoizedChildComponent data={data} />
//       </div>
//     );
//   };
  
//   const ChildComponent = ({ data }) => {
//     console.log("Child Component re-rendered!");
//     return <div>{data.value}</div>;
//   };
  
//   const MemoizedChildComponent = React.memo(ChildComponent);
  




