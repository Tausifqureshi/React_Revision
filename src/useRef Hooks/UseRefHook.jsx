
import React, { useRef } from "react";

// useRef me ye sub store kar ssakte hai.
//String
//Number
//Array
//Object
//HTML ke Dom ke reference bhi store kar sakte hai ye kafi importent hai.

// Simple Example Crrent Value Print use useRef.
// export default function UseRefHook() {
//   const userName = useRef("Tausif"); //initial value kuch bhi de sakte hai useRef me initial value.
//   console.log(userName);  //useRef Ek current object retrun karta hai single.

//   return (
//     <div>
//       <h3>Hello {userName.current}</h3>
//       {/* useRef ki Value print bhi karwa sakte hai browser pe */}

//     </div>
//   );
// }




// Example off useRef use HTML Dom Referance Store
function UseRefHook() {
 const h1Ref = useRef(); //h1 ki referance store.
 
    function handleClick (){
      console.log(h1Ref); // h1 me ref pass clg me pura h1 element aye ga print hoke.
      const h1Elememt = h1Ref.current; // h1 access useRef wala.
      h1Elememt.textContent = 'Tausif Quraishi'; //Content Value Change.
      h1Elememt.style.background = 'green'
      h1Elememt.style.color = 'white'

    }
  return (
    <>
    {/* DOM element ko reference ke saath link karna ref use kar ke*/}
        <h1 ref={h1Ref}>Hello There</h1>
        <button onClick={handleClick}>Show Value</button>
    </>
  )
}

export default UseRefHook