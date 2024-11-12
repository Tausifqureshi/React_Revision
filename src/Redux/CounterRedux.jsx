import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function CounterRedux() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <div  style={{display: "flex", justifyContent: "center", gap : "2rem"}}>
      {/* <h1>  Counter App </h1> */}

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      
      <span>{count}</span>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterRedux;
