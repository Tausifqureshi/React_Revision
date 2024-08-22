// ==================================================== JSX ====================================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me JSX (JavaScript XML) ek syntax extension hai jo React ke saath use hota hai. Yeh JavaScript code ke andar HTML-like syntax ko likhne ki suvidha deta hai. JSX ka use karne se aapko UI components ko likhna asaan ho jata hai, kyunki yeh HTML aur JavaScript ko combine kar ke ek hi jagah pe likhne ka option deta hai.


// ================================================= JSX Basic =================================================== //
// ChatGPT Se Liya Hua Syntex ---> JSX ke Basic Concepts.

// 1. HTML-like Syntax.
// JSX me aap HTML tags ka use kar sakte ho, jaise <div>, <h1>, <p>, etc. Yeh tags bilkul HTML jaise lagte hain, lekin inka kaam JavaScript ke andar hota hai.

// const element = <h1>Hello, world!</h1>;


// 2. JavaScript Expressions:
// JSX me aap curly braces {} ka use karke JavaScript expressions likh sakte ho. Isse aap variables, functions, ya kisi bhi valid JavaScript expression ko render kar sakte ho.
const name = "Tausif";
const element = <h1>Hello, {name}!</h1>;
function JsxRules() {
  return (
    <div>
    {element}
    </div>
  )
}

export default JsxRules



// 3. JSX is not HTML:
// JSX me kuch cheezein HTML se different hoti hain, jaise class attribute ko className likhna padta hai, aur for attribute ko htmlFor likhte hain. Yeh differences isliye hain kyunki class aur for JavaScript ke reserved keywords hain.
// const element = <div className="greeting">Hello, world!</div>;



// 4. JSX ke Important Rules:
// Single Parent Element: JSX me aapko multiple elements ko ek single parent element ke andar wrap karna padta hai. Yeh isliye hota hai kyunki JSX expressions ko ek single element return karna hota hai.

// Incorrect
// return (
//     <h1>Hello, world!</h1>
//     <h2>Good to see you here.</h2>
//   );
  
//   // Correct
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>Good to see you here.</h2>
//     </div>
//   );
  


// 5. JavaScript Expressions Only:
// JSX me aap sirf expressions use kar sakte ho, statements nahi. Yaani, aap {if...else}, {for...} jaise statements ka use nahi kar sakte. Agar conditionally render karna hai to ternary operator (condition ? true : false) ka use karna hoga.
// const isLoggedIn = true;
// return (
//   <div>
//     {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
//   </div>
// );







// ============================================== JSX  Advantages ================================================ //
// ChatGPT Se Liya Hua Syntex --->  JSX ke Advantages:
// 1. Readable and Intuitive: Yeh aapke UI code ko readable aur samajhne me easy banata hai.

// 2. Full Power of JavaScript: Aap JSX me JavaScript expressions ka use kar sakte ho, jo flexibility provide karta hai.

// 3. Faster Development: JSX ke saath kaam karna easy hai aur yeh development speed ko enhance karta hai.

