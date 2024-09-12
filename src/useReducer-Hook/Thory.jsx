// ================================================ useReducer =================================================== //
// ChatGPT Se Liya Hua Syntex ---> useReducer Hook React.js mein ek aisa hook hai jo state management ke liye use hota hai, aur uska kaam useState hook se milta-julta hai. Lekin jab state handling complex hoti hai, ya jab ek state ke alag-alag parts ko alag-alag actions ke through update karna hota hai, to useReducer zyada powerful aur flexible solution ban jata hai.

// ============================================= useReducer Syntax =============================================== //
// ChatGPT Se Liya Hua Syntex ---> useReducer ka Syntax:
const [state, dispatch] = useReducer(reducer, initialState);

// 1. state: Ye current state value ko represent karta hai.

// 2. dispatch: Ye ek function hai jo actions ko trigger karta hai.

// 3. reducer: Ye ek function hai jo previous state aur ek action ko input ke roop mein leta hai aur ek nai state return karta hai.

// 4. initialState: Ye initial state ko define karta hai.

// =========================================== useReducer Function ============================================== //
//  ChatGPT Se Liya Hua Syntex ---> reducer Function. reducer function do arguments leta hai.
// 1. current state: Present state value.
// 2. action: Ek object hota hai jo kis type ki action karni hai usse define karta hai, aur optional payload ke sath data ko pass karta hai.

//  ChatGPT Se Liya Hua Syntex ---> reducer Function ka Example:
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}




//  ChatGPT Se Liya Hua Syntex ---> Full Example:
import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
