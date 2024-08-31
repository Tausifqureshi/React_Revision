// Count Number Example.
// import React, { useState } from "react";

// function UseStateChap() {
//   // useState hook ek array return karta hai jisme do elements hote hain:
//   // 1. State variable - jo current state value ko represent karta hai.
//   // 2. Setter function - jo state ko update karne ke liye use hota hai.
     
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Current count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default UseStateChap;





// Name Change Example.
import React, { useState } from "react";

function UseStateChap() {

// const valueReturn = useState("Tausif");
// console.log(valueReturn); //ek array return karta hai jism me 1index pe current value and 2index pe ek function hota hai jis ka use kar ke ham state ki value ko update kar sakte hai.

const [firstName, setFirstName ] = useState("Tausif");
 function handleClick(){
    if (firstName === "Tausif") { // is se toggle kara re hai name chnage.
        setFirstName("Quarishi"); //is function se value update kar re hai.
    }else{
        setFirstName("Tausif")
    }
    }
  return (
    <>
      <h2>Current change your name: {firstName}</h2>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

export default UseStateChap;

// ============================================== React useState ================================================= //
// ChatGPT Se Liya Hua Syntex ---> React.js me useState ek hook hai jo functional components me state ko manage karne ke liye use hota hai. Isse aap apne component ke andar local state create kar sakte ho. Functional components React 16.8 se pehle state ko manage nahi kar sakte the, lekin hooks ke aane ke baad ye possible ho gaya hai.

// const [state, setState] = useState(initialValue);
// 1. state: Yeh current state ka value hold karta hai.
// 2. setState: Yeh ek function hai jo state ka value update karne ke liye use hota hai.Jab aap is function ko call karte ho, to React component ko re-render karta hai nayi state ke saath.
// 3. initialValue: Yeh state ka initial value define karta hai.

// ============================================= Important Points ================================================ //
// ChatGPT Se Liya Hua Syntex ---> Important Points:

// 1. useState hook ko component ke andar top-level pe hi call karna chahiye. Aap ise loops, conditions, ya nested functions ke andar call nahi kar sakte.

// 2. Aap ek component me multiple useState hooks ka use kar sakte ho alag-alag state variables ke liye.
