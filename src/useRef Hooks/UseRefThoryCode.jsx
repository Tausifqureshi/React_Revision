// // ============================================================================================================== //
// // ChatGPT se liya hua syentax -----> 
// // useRef hook React ka ek powerful tool hai jo DOM elements ya kisi bhi mutable value ko directly refer karne ke liye use hota hai without re-rendering the component. Aao ise detail me samjhte hain, especially DOM manipulation aur CSS ke context me.
// // ============================================================================================================== //
// //  ChatGPT se liya hua syentax -----> useRef Hook kya hota hai?
// // useRef kya hota hai?
// // useRef() ek hook hai jo ek mutable object return karta hai jiska .current property hota hai. Ye value persist rehti hai across renders, lekin component re-render nahi hota jab ye value change hoti hai.
// import { useRef, useEffect } from 'react';

// function MyComponent() {
//   const divRef = useRef(null);

//   useEffect(() => {
//     // Direct DOM access
//     divRef.current.style.backgroundColor = 'lightblue';
//   }, []);

//   return <div ref={divRef}>Hello Ref!</div>;
// }


// // ============================================================================================================== //
// // ChatGPT se liya hua syentax -----> useRef  ka use Focus karne ke liye
// // useRef ka use focus karne ke liye bhi hota hai. Isme hum input element ko reference karte hain aur use focus karte hain jab component mount hota hai.
// function InputFocus() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} type="text" />;
// }



// // ============================================================================================================== //
// // ChatGPT se liya hua syentax -----> useRef ka use chnage style karne ke liye 

// function ChangeStyle() {
//   const btnRef = useRef(null);

//   const handleClick = () => {
//     btnRef.current.style.backgroundColor = 'green';
//     btnRef.current.style.color = 'white';
//   };

//   return (
//     <button ref={btnRef} onClick={handleClick}>
//       Change My Style
//     </button>
//   );
// }


// // ============================================================================================================== //
// //  ChatGPT se liya hua syentax -----> useRef ka use Store previous value
// function Counter() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <>
//       <p>Now: {count}, Before: {prevCount.current}</p>
//       <button onClick={() => setCount(c => c + 1)}>+1</button>
//     </>
//   );
// }



// // ============================================================================================================== //
// // ChatGPT se liya hua syentax -----> useRef ka use Password toggle karne ke liye
// import React, { useRef } from 'react';

// function PasswordToggle() {
//   const inputRef = useRef(null);

//   const togglePassword = () => {
//     const input = inputRef.current;
//     input.type = input.type === 'password' ? 'text' : 'password';
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="password" placeholder="Enter password" />
//       <button onClick={togglePassword}>👁 Toggle</button>
//     </div>
//   );
// }

// export default PasswordToggle;



// // =============================================================================================================== //
// // ChatGPT se liya hua syentax -----> useRef ka toggle search bar ke liye and focus karne ke liye
// function PureRefToggleSearch() {
//   const inputRef = useRef(null);

//   const toggleSearch = () => {
//     const input = inputRef.current;
//     if (input.style.display === 'none') {
//       input.style.display = 'inline-block';
//       input.focus();
//     } else {
//       input.style.display = 'none';
//     }

//     // ternary operator se toggle karna
//     // const input = inputRef.current;
//     // input.style.display = input.style.display === 'none' ? 'inline-block' : 'none';
//     // input.style.display === 'inline-block' && input.focus(); // focus only i
//   };

//   return (
//     <div>
//       <button onClick={toggleSearch}>🔍 Toggle Search</button>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Search..."
//         style={{ display: 'none', marginLeft: '10px', padding: '4px' }}
//       />
//     </div>
//   );
// }
