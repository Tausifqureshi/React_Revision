// ============================================ Components in React ============================================== //
// ChatGPT Se Liya Hua Syntex ---> React.js me components ek basic building block hain jo user interface ko modular aur reusable banate hain.

// ============================================ Components Types ============================================== //
// ChatGPT Se Liya Hua Syntex ---> Types of Components in React
// React.js me do tareeke ke components hote hain:

//  Function Components.
//  Class Components.


// 1. Function components: Function components simple JavaScript functions hote hain jo JSX (JavaScript XML) return karte hain. Ye components stateless hote hain, matlab ye apne andar state ko manage nahi karte. Lekin, React 16.8 se hooks ka use karke function components me bhi state ko manage kar sakte hain.
// import React from 'react';

// function MyComponent() {
//   return <h1>Hello, World!</h1>;
// }

// export default MyComponent;



// 2. Class Components
// Class components: purane tareeke se React me components banane ka ek method hain. Ye components state ko manage kar sakte hain aur lifecycle methods ko implement kar sakte hain.
// import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// export default Welcome;




// ======================================== Components ke Key Concepts =========================================== //
// ChatGPT Se Liya Hua Syntex ---> Components ke Key Concepts.

// Props (Properties): Props ek component ko external data pass karne ke liye use kiye jaate hain.
// Function component me props function argument ke roop me milte hain. aur class component me this.props se access kiye jaate hain.

// Example (Function Component):
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  

//   Example (Class Component):
  class Greeting extends Component {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  

// ============================================ Lifecycle Methods ================================================ //
// ChatGPT Se Liya Hua Syntex ---> Lifecycle Methods.
// Lifecycle methods class components me hoti hain, jo specific points par call hoti hain jab component render, update, ya destroy hota hai. Common lifecycle methods me se kuch hain

// 1. componentDidMount(): Ye method tab call hota hai jab component first time DOM me mount hota hai.
// 2. componentDidUpdate(prevProps, prevState): Ye method tab call hota hai jab component update hota hai.
// 3. componentWillUnmount(): Ye method tab call hota hai jab component DOM se remove hota hai.

// Example (Class Component Lifecycle).
class MyComponent extends Component {
    componentDidMount() {
      console.log('Component mounted');
    }
  
    componentWillUnmount() {
      console.log('Component unmounted');
    }
  
    render() {
      return <div>Check the console for lifecycle methods</div>;
    }
  }
  

// Function components me useEffect hook ka use karke similar functionality achieve ki ja sakti hai.
// Example (Function Component with useEffect).
import React, { useEffect } from 'react';
function MyComponent() {
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return <div>Check the console for lifecycle effects</div>;
}
