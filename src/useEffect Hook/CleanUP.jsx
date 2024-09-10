// ========================================= Cleanup Function Kya Hai ============================================ //
// ChatGPT Se Liya Hua Syntex ---> Cleanup Function Kya Hai.
// Jab hum useEffect ke andar koi side effect create karte hain (jaise event listeners, API subscriptions, ya timers), toh unhe properly clean-up karna zaroori hota hai jab component unmount ho ya dependencies change ho jaayein. Agar cleanup na kiya jaye, toh memory leaks ya unexpected behavior ho sakta hai.

// Cleanup function useEffect ke andar return kiya jaata hai. Yeh function tab trigger hota hai jab:
// 1. Component unmount hota hai.
// 2. Dependency array mein listed values change hoti hain (agar koi dependencies di gayi hain).

import React, { useEffect, useState } from "react";
import PreviousState from "../useState Hook/PreviousState";

function CleanUP() {
  console.log("Component renders");
  const [conter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Call useEffect Function");

    return function () {
      //return cleanup function yaha se.ye function jab call hota hai jab component unmount hota hai unmount means screen se hide hona.

      console.log("Clean UP Function Called");
    };
  }, []);

  return (
    <div>
      <h1>counter {conter}</h1>
      <button
      onClick={() => { setCounter((PreviousState) => PreviousState + 1); }} > Click Counter </button>
    </div>
  );
}

export default CleanUP;
