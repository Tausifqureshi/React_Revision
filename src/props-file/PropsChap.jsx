// ============================================ rops Kya Hote Hain =============================================== //
// ChatGPT Se Liya Hua Syntex ---> Props Kya Hote Hain.
// Props ka full form hai properties. Yeh ek object hota hai jo React component ke attributes ko represent karta hai. Props ko use karke hum parent component se child component tak data bhejte hain. Ye data immutable (change na hone wala) hota hai, matlab child component props ko modify nahi kar sakta.


// 🔹 Props kya hote hain?
// Props React me ek component se dusre component ko data bhejne ka tarika hai.

// Jaise tum ek function ko argument dete ho, waise hi component ko props diye jaate hain.





// 🔹 2. Types of Props (Matlab kis-kis type ke data props me de sakte ho)
// React props me tum koi bhi valid JavaScript data type bhej sakte ho:

// | 📦 Prop Type                | 🔍 Example                                  | 🧠 Use             |
// | --------------------------- | ------------------------------------------- | ------------------ |
// | **String**                  | `<User name="Amit" />`                      | Text ya label dena |
// | **Number**                  | `<User age={25} />`                         | Numeric data       |
// | **Boolean**                 | `<User isLoggedIn={true} />`                | Flags ya toggles   |
// | **Array**                   | `<List items={[1, 2, 3]} />`                | List pass karna    |
// | **Object**                  | `<User data={{ name: 'Amit', age: 25 }} />` | Grouped data       |
// | **Function**                | `<Button onClick={handleClick} />`          | Event handling     |
// | **Component**               | `<Wrapper content={<Child />} />`           | Nested components  |
// | **Children (Special Prop)** | `<Card>Content</Card>`                      | Inner JSX as props |

// ======================================== Ek hi componet me property =========================================== //
// ChatGPT Se Liya Hua Syntex --->  Ek hi componet me property se value lene props se.
// import React from 'react';

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="Tausif" />
//       <Greeting name="Ayesha" />
//     </div>
//   );
// }

// export default App;

// ======================================== Props Ki Kuch Khas Baatein =========================================== //
// ChatGPT Se Liya Hua Syntex ---> Props Ki Kuch Khas Baatein:

// 1. Immutable Nature: Props ko child component ke andar change nahi kiya ja sakta. Agar props ko modify karna ho to state use ki jati hai.

// 2. Readonly: Props ke values read-only hoti hain. React ka concept yeh hota hai ki data ek direction me flow kare, yani top-to-bottom (parent se child).

// 3. Default Props: Agar kisi prop ke li.ye default value set karni ho, to defaultProps ka use kar sakte hain:

// Destructuring with default	function Comp({ key = value }) 
// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;

// }

//  💡 Iska matlab kya hai?
// Agar tum Welcome component ko bina name prop ke call karoge:
// Welcome.defaultProps = {
//   name: 'Guest',
// };



// Default props method	Component.defaultProps = { key: value }
// import React from "react";

// // Greeting component jisme default prop di gayi hai
// function Greeting({ name = "Guest" }) {
//   return <h1>Hello, {name}!</h1>;
// }

// // App component jo Greeting ko use karta hai
// function App() {
//   return (
//     <div>
//       <Greeting name="Amit" />   {/* Name diya gaya hai */}
//       <Greeting />               {/* Name nahi diya gaya, default chalega */}
//     </div>
//   );
// }

// export default App;


// 4. Prop Types: React me prop types ko define karne ka ek tariqa hota hai jisse hum ensure karte hain ki correct data type pass ho raha hai. Ye development me debugging ke liye helpful hota hai.
// import PropTypes from 'prop-types';

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// Welcome.propTypes = {
//   name: PropTypes.string,
// };




// ============================================== Alag Alag file ================================================= //
// ChatGPT Se Liya Hua Syntex ---> Alag Alag file se value pass karna props se.
import React from 'react'
import UsePro from './UsePro'
import ChildrenPro from './ChildrenPro'

function PropsChap() {
  return ( 
    <div> 
    <UsePro firstName = "Tausif" age={24}/>  {/* ye props use kar ke data pass hora UsePro-File me */}
    <UsePro firstName = "Quraishi" age={25}/> 
    
     
    
     {/* Yaha pe children props ka istemal ho raha hai */}
     <ChildrenPro >

     <h1>Hello, World!</h1>
     <p>Ye content `children` props ke through pass ho raha hai.</p>
     
     </ChildrenPro>

    </div>
  )
}   

export default PropsChap