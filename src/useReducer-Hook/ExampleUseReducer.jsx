import React, { useReducer, useState } from "react";

function ExampleUseReducer() {
  const valueReturn = useReducer(); //useReducer bhi ek array return karta hai zero index pe state hoga or frist index pe function return kar re ga same use state ki tara hi. useReducer firstArgumnet laga ek reducer function or dusra argument lega initial-value useState me ham direct hi jo bhi in initial value pass kar dete de but is me agar hame direct dena hai us me { count: 0 } useReducer me to bhi de sakte hai.
  
  // console.log("UseReducer Value ",valueReturn);

  const initialState = { count: 0 };
  function reducer() {}
  const [state, dispatch] = useReducer(reducer, initialValue);


  const [count, setCount] = useState(0);
  const increaseHandle = () => {
    //    setCount(count + 1);

    setCount((prev) => prev + 1); //is tara se bhi use kar sakte hai.
  };

  const resetHandle = () => {
    setCount(0);
  };
  const decreaseHandle = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Application</h1>
      <h1>Count {count}</h1>
      <div>
        <button style={{ margin: "0 10px" }} onClick={increaseHandle}>
          {" "}
          Increase{" "}
        </button>

        <button style={{ margin: "0 10px" }} onClick={decreaseHandle}>
          {" "}
          Decrease{" "}
        </button>

        <button style={{ margin: "0 10px" }} onClick={resetHandle}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
}

export default ExampleUseReducer;
