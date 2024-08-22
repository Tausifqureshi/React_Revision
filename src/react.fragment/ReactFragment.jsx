// ============================================== React.Fragment ================================================= //
// ChatGPT Se Liya Hua Syntex ---> React.Fragment Kya Hai.
// React.Fragment React ka ek built-in component hai jo multiple elements ko ek parent element ke bina group karne ke liye use hota hai. Jab humein JSX mein multiple elements ko render karna hota hai, to React.Fragment ka use karte hain taki hum unnecessary DOM nodes create kiye bina multiple elements ko group kar saken.





// ============================================ React.Fragment Use =============================================== //
// ChatGPT Se Liya Hua Syntex ---> React.Fragment Ka Use Kyun Karte Hain?
// Jab hum JSX mein multiple elements ko return karte hain, to React ko ek single parent element ki zaroorat hoti hai. Agar hum bina kisi parent element ke multiple elements ko return karenge, to error aayega. Is problem ka solution React.Fragment hai. Isse hum multiple elements ko wrap kar sakte hain bina kisi additional HTML element (jaise <div>, <span>, etc.) ke.



// React.Fragment Ka Syntax
// React.Fragment ka use do tarike se hota hai:

// 1. React.Fragment Tag ke Saath:
// Is approach mein hum <React.Fragment> tag ka use karte hain.
import React from 'react';

function Example() {
  return (
    <React.Fragment>
      <h1>Heading</h1>
      <p>This is a paragraph.</p>
    </React.Fragment>
  );
}
// 2. Short Syntax (Empty Tags):
// Yeh shorthand syntax hota hai jisme hum sirf empty tags (<> </>) ka use karte hain.
import React from 'react';

function Example() {
  return (
    <>
      <h1>Heading</h1>
      <p>This is a paragraph.</p>
    </>
  );
}





