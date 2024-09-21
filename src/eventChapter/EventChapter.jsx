import React from "react";

function EventChapter() {

  function handleClick(e) {
    console.log(e.target);
    e.target.textContent = "React Code"; //value bhi change kar sakte hai aise
  }

  // Pass Argumet handleclick 2 me.
  function handleClick2(fName, lName) {
    console.log(fName, lName);
  }

  return (
    <>
      {/* Value Change Function HandleClick function only */}
      <h1> EventChapter </h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>

      <br /> <br />
      
      {/* Passing Argument Function This */}
      <button
        type="button"
        //onClick={handleClick2} //sirf aise function call parameter console kar ge tu browser khud hi first parameter ek function object pass kar deta hai. agar jitne parameter hai utne ho argumnet dege tu ham us se khud hi handle kar sakte hai is ke niche wala parfect code hai.

        onClick={function (e) {
          console.log(e.target);
          handleClick2("Tausif", "Quraishi");
        }}
      >
        Click me2
      </button>
    </>
  );
}

export default EventChapter;

// ================================================ React Event ================================================== //
// ChatGPT Se Liya Hua Syntex --->  React.js mein events ka use karna kaafi zaroori hota hai, kyunki yeh aapko user interactions handle karne ki suvidha deta hai, jaise button click, form submit, mouse move, etc. Chaliye iske basic concepts ko detail mein samajhte hain.

// ========================================== Event Handling in React ============================================ //
// ChatGPT Se Liya Hua Syntex ---> 1. Event Handling in React
// React.js mein event handling HTML DOM events se kaafi similar hota hai, lekin kuch key differences bhi hote hain:

// 1. CamelCase: React mein, events ke names camelCase mein hote hain. Jaise onclick ki jagah onClick use hota hai.

// 2. Function as Handler: JavaScript mein strings pass karne ke bajaye, React mein aap functions ko event handler ke taur pe pass karte hain.

// ==================================== Passing Arguments to Event Handlers ====================================== //
// ChatGPT Se Liya Hua Syntex ---> Passing Arguments to Event Handlers.
// Kabhi-kabhi aapko event handlers mein arguments pass karne ki zaroorat hoti hai.

// import React from 'react';

// function App() {
//   const handleClick = (name) => {
//     alert(`Hello, ${name}!`);
//   };

//   return (
//     <div>
//       <button onClick={() => handleClick('Tausif')}>Click Me!</button>
//     </div>
//   );
// }

// export default App;

// =============================================== Event Object ================================================== //
// ChatGPT Se Liya Hua Syntex ---> Event Object
// Jab bhi koi event trigger hota hai, toh React automatically ek synthetic event object pass karta hai jo event ki information rakhta hai, jaise ki event ka type, target, etc.

// import React from 'react';

// function App() {
//   const handleClick = (event) => {
//     alert(`Button type: ${event.type}`);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   );
// }

// export default App;

// ============================================ Preventing Default =============================================== //
// ChatGPT Se Liya Hua Syntex ---> Preventing Default Behavior
// Agar aap kisi event ka default behavior rokna chahte hain, jaise form ka page reload karna, toh aap event.preventDefault() ka use kar sakte hain.

// import React from 'react';

// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Form submission prevented');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;

// ========================================== Common React.js Events ============================================= //
// ChatGPT Se Liya Hua Syntex ---> Common React.js Events: React.js me kuch common events hote hain.

// 1. onClick: Kisi element par click hone par trigger hota hai.

// 2. onChange: Input field ke value me badlav hone par trigger hota hai.

// 3. onSubmit: Kisi form ko submit karne par trigger hota hai.

// 4. onMouseEnter: Jab mouse cursor kisi element par aata hai.

// 5. onMouseLeave: Jab mouse cursor kisi element se bahar jata hai.

// 6. onKeyDown: Jab keyboard me koi key dabai jati hai.
