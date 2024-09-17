import React, { useReducer, useState } from "react";

function ExampleUseReducer() {
//   const valueReturn = useReducer(); //useReducer bhi ek array return karta hai zero index pe state hoga or frist index pe function return kar re ga same use state ki tara hi. useReducer firstArgumnet laga ek reducer function or dusra argument lega initial-value useState me ham direct hi jo bhi in initial value pass kar dete de but is me agar hame direct dena hai us me { count: 0 } useReducer me to bhi de sakte hai.

  // console.log("UseReducer Value ",valueReturn);

  const initialState = { count: 0 }; // initialState ye ek object hai.

  function reducer(state, action) {//ye function 2parameter leta hai first state dusra action

    // If statement use kar ke.
    if(action.type === "increment"){
      return ({...state, count: state.count + 1})
    }

    else if(action.type === "decrement"){
      return ({...state, count: state.count - 1})
    }
    else if(action.type === "reset"){
      return ({...state, count: 0})
    }


    // Switch statement use kar ke
    // switch (action.type) {
    //   case "increment":
    //     return { count: state.count + 1 };

    //   case "decrement":
    //     return { count: state.count - 1 };

    //   case "reset":
    //     return { count: 0 };

    //   default:
    //     return state; //agar kuch value nhi match to purani state return ho jaye gi.
    // }
  }

  const [state, dispatch] = useReducer(reducer, initialState); //useReducer 2 argumnet first function 2 initialState.

  const [count, setCount] = useState(0);

  // Increase Function.
  const increaseHandle = () => {
    dispatch({ type: "increment" }); //dispatch function call hora hai jo hame useReducer se 1index me milra hai kisi bhi cheez ko update karne ke liye hame dispatch function call karna hoga. ye dispatch function call kare ga reducer function ko.
  };

  //Decrase  Function.
  const decreaseHandle = () => {
    dispatch({ type: "decrement" });
  };

  //Resate Function.
  const resetHandle = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h1>Application</h1>
      <h1>Count {state.count}</h1>
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
