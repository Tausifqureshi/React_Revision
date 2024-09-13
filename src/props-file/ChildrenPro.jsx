import React from "react";

function ChildrenPro(props) {
  return (
    <>

   {props.children}{/* Yaha pe children props ka istemal ho raha hai */}



    </>
  );
}
  
export default ChildrenPro;



// ============================================== props.children ================================================= //
// ChatGPT Se Liya Hua Syntex ---> React.js me children props ek khasiyat hai jo components ko doosre components ke andar content pass karne ka tareeqa deti hai. children props ka istemal tab hota hai jab aap ek component ke beech mein content ya elements insert karna chahte hain, aur ye content automatically props.children ke through accessible hota hai.

// import React from 'react';

// // Ek Container Component banate hain
// function Container(props) {
//   return (
//     <div className="container">
//       {props.children} {/* Yaha pe children props ka istemal ho raha hai */}
//     </div>
//   );
// }

// Parent Component jaha se Container ko call kiya jayega 
// function App() {
//   return (
//     <Container>
//       <h1>Hello, World!</h1>
//       <p>Ye content `children` props ke through pass ho raha hai.</p>
//     </Container>
//   );
// }

// export default App;
// ========================================== props.children Benefits ============================================ //
// ChatGPT Se Liya Hua Syntex ---> rops.children Benefits:
// 1. Flexibility: Aap kisi bhi component ke andar dynamic content pass kar sakte hain.

// 2. Reusability: children props ki wajah se aap ek hi component ko alag-alag content ke saath baar baar use kar sakte hain.

// 3. Composition: Complex UI ko simplify karne ke liye aap components ko compose kar sakte hain.