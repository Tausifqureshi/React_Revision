import React, { useReducer, useState } from "react";

function ExampleUseReducer() {
  const [counter, setCounter] = useState(0);
  const increaseHandle = () => {
    //    setCounter(counter + 1);

    setCounter((prev) => prev + 1); //is tara se bhi use kar sakte hai.
  };

  const resetHandle = () => {
    setCounter(0);
  };
  const decreaseHandle = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Application</h1>
      <h1>Counter {counter}</h1>
      <div>
        <button style={{ margin: "0 10px" }} onClick={increaseHandle}>
          Increase
        </button>
        <button style={{ margin: "0 10px" }} onClick={resetHandle}>
          Reset
        </button>
        <button style={{ margin: "0 10px" }} onClick={decreaseHandle}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default ExampleUseReducer;
