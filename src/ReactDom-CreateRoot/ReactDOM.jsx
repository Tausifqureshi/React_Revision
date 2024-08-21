// ============================================ ReactDOM.createRoot ============================================== //
// ChatGPT Se Liya Hua Syntex --->  ReactDOM.createRoot ek naya method hai jo React 18 mein introduce kiya gaya tha, aur iska use React application ko render karne ke liye kiya jata hai. Iska main purpose concurrent rendering ko support karna hai, jo ki React ki latest features ko efficiently handle karne mein madad karta hai.



// ReactDOM.createRoot ka Basic Usage.
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 ke liye
import App from './App';

// React 18 ke saath new root create karein
const root = ReactDOM.createRoot(document.getElementById('root'));

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
// ChatGPT Se Liya Hua Syntex ---> React 18 se pehle, React applications ko ReactDOM.render method ka use karke render kiya jata tha. Yeh method React 18 se pehle ka standard tha aur isme kuch key differences the, jo React 18 ke naye rendering API ke sath update hue hain.

// React 17 aur Usse Pehle
// ReactDOM.render Method
// ReactDOM.render method ek standard method hai jise React 17 aur usse pehle use kiya jata tha. Is method ko ek root DOM element par React component render karne ke liye use kiya jata hai.


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // App component ko import karte hain

// const rootElement = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
