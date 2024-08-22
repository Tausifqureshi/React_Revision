// ================================================ React-CSS ==================================================== //
// ChatGPT Se Liya Hua Syntex --->  React.js me CSS ka istemal karna kaafi flexible aur powerful hai. CSS ko React components ke sath integrate karne ke liye kai tareeke hain, aur har ek ka apna unique use case hai. Main tumhe in tareekon aur unke rules ke bare me detail me samjhata hoon.


// ============================================== Inline Styles ================================================== //
// ChatGPT Se Liya Hua Syntex ---> 1. Inline Styles: Inline styles React me JavaScript objects ke roop me likhi jati hain. Ye tareeka chhote aur specific styles ke liye useful hota hai.
function MyComponent() {
    const divStyle = {
      color: 'blue',
      backgroundColor: 'lightgray',
      padding: '10px'
    };
  
    return <div style={divStyle}>Hello, Tausif!</div>;
  }
  

// ============================================== CSS Stylesheets ================================================ //
// ChatGPT Se Liya Hua Syntex ---> 2. CSS Stylesheets: React.js me normal CSS files ko import karke use kiya ja sakta hai. Ye traditional approach hai aur React me bhi ye kaafi common hai.

import './styles.css';

function MyComponent() {
  return <div className="my-class">Hello, Tausif!</div>;
}


// =============================================== CSS Modules =================================================== //
// ChatGPT Se Liya Hua Syntex ---> 3. CSS Modules: CSS Modules ek tariqa hai jo ki scoped aur modular CSS provide karta hai. Iska matlab hai ki CSS styles sirf us specific component tak limited rahengi jahan wo import hui hain.

import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myClass}>Hello, Tausif!</div>;
}
