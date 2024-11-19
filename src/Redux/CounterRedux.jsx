// React aur Redux hooks ko import kar rahe hain
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice"; // `counterSlice` se actions import kar rahe hain

function CounterRedux() {
  // `useSelector` hook ka use karte hue Redux store se `count` value ko access kar rahe hain
  // `useSelector` ko use karte hain taaki hum Redux store se required state ko safely read kar sakein.
  // Yahan `state.counter.count` ko access kar rahe hain, jisme `counter` slice ke andar `count` value stored hai.
  // const {count} = useSelector((state) => state.myCounterState); // yahan 'count' safe access ho raha hai

  const {count} = useSelector((state) => {  //useSelector se koi bhi state ko slect kar sakte hai. count kodestructure  ke nikal re hai. aisa bhi kar sakte hai jaisa upper ai vaisa bbi kar sakte hai
    console.log("state mile gi yaha se myCounterState state hai",state);
    return state.myCounterState

  })
  

  
  // `useDispatch` hook ka use kar rahe hain taaki Redux store se actions dispatch kiye ja sakein
  // `useDispatch` ko hum action creators (jaise increment, decrement, reset) ko call karne ke liye use karte hain
  // Jab aap koi action dispatch karte hain, toh Redux store update hota hai aur component re-render hota hai.

  const dispatch = useDispatch(); // `dispatch` function ko state ko update karne ke liye use kiya jata hai. Yeh function reducer ko call karta hai, jisse state update hoti hai. Jab bhi `dispatch` ko call kiya jata hai, woh ek action trigger karta hai jo action ke roop mein function incremnet or bhi jitne function  // Halaanki abhi hum action ko use nahi kar rahe, lekin yeh action milta hai aur process hota hai. ya malum hona chachiye ke parameter me milta hai

  return (
    // Counter component ka layout define kar rahe hain
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <h1>Counter App</h1>
      
      {/* Displaying the `count` value */}
      <span style={{ fontSize: "2rem" }}>count: {count}</span>
      {/* yahan count value display ho rahi hai  */}

      <div style={{ display: "flex", gap: "1rem" }}>
        {/* Increment button */}
        <button
          aria-label="Increment value" // Accessibility ke liye button ka label
          onClick={() => dispatch(increment())} // `increment` action ko dispatch kar rahe hain
        >
          Increment
        </button>
        
        {/* Decrement button */}
        <button
          aria-label="Decrement value" // Accessibility ke liye button ka label
          onClick={() => dispatch(decrement())} // `decrement` action ko dispatch kar rahe hain
        >
          Decrement
        </button>
        
        {/* Reset button */}
        <button
          aria-label="Reset value" // Accessibility ke liye button ka label
          onClick={() => dispatch(reset())} // `reset` action ko dispatch kar rahe hain
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
