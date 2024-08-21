// ================================================= ReactDOM ==================================================== //
// ChatGPT Se Liya Hua Syntex ---> ReactDOM kya hai.
// ReactDOM ek package hai jo React components ko web page par render karne ke liye responsible hai. Iska main kaam React components ko HTML elements me convert karna hota hai jisse wo browser me dikhaye de sake.

// ChatGPT Se Liya Hua Syntex ---> ReactDOM Methods.

// 1. ReactDOM.createRoot(): React 18 me introduce hui. React component ko DOM me render karta hai. Concurrent mode features ko support karta hai.

// 2. ReactDOM.render(): React 17 tak commonly use hoti thi. React component ko DOM node me inject karta hai. React 18 ke baad ReactDOM.createRoot() se replace ho gaya hai.

// 3. ReactDOM.hydrate(): Server-rendered HTML ko React ke sath sync (rehydrate) karta hai. Server-Side Rendering (SSR) ke liye useful hai.

// 4. ReactDOM.unmountComponentAtNode(): Specific DOM node se React component ko unmount ya remove karta hai.

// ============================================ ReactDOM.createRoot ============================================== //
// ChatGPT Se Liya Hua Syntex --->  ReactDOM.createRoot ek naya method hai jo React 18 mein introduce kiya gaya tha, aur iska use React application ko render karne ke liye kiya jata hai. Iska main purpose concurrent rendering ko support karna hai, jo ki React ki latest features ko efficiently handle karne mein madad karta hai.

// ReactDOM.createRoot ka Basic Usage.
import React from "react";
import ReactDOM from "react-dom/client"; // React 18 ke liye
import App from "./App";

// React 18 ke saath new root create karein
const root = ReactDOM.createRoot(document.getElementById("root"));

// App component ko render karein
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// render method (): ka use karke aap apne React components ko DOM pe render kar sakte hain.

// ====================================== ReactDOM.createRoot Key Points ========================================= //
// ChatGPT Se Liya Hua Syntex ---> Key Points.

// 1. Concurrent Rendering: createRoot method concurrent rendering ko enable karta hai, jo ki React app ko zyada responsive aur smooth banata hai.

// 2. Backward Compatibility: ReactDOM.createRoot backward compatible hai, lekin React 18 ke features ko support karne ke liye prefer kiya jata hai.

// 3. Future-Proofing: React 18 aur uske aage ke versions ke features aur improvements ke liye ReactDOM.createRoot zyada suitable hai.

// ===================================== React 18 se pehle render element ======================================== //
// ChatGPT Se Liya Hua Syntex ---> . ReactDOM.render()
// ReactDOM.render() function React v17 tak bahut common tha, lekin React 18 me isko replace kar diya gaya hai. Ye function ek React element ko specify kiye gaye DOM node me render karta tha

import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello, World!</h1>;
}

// Pura App component root element ke andar render hoga
ReactDOM.render(<App />, document.getElementById("root"));
