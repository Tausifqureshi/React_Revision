import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function CounterRedux() {
  const count = useSelector((state) => state.counter.count); // yahan 'count' safe access ho raha hai
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <h1>Counter App</h1>
      <span style={{ fontSize: "2rem" }}>{count}</span> {/* yahan count value display ho rahi hai */}

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterRedux;
