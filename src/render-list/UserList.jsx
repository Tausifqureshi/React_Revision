import React from "react";
import RenderList from "./RenderList";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];
   
function UserList() { 
  return (  
    <>  
      <>
        {/* Short syntax without return keyword */}
        {/* {items.map((valu) => ( <RenderList key={valu.id} number={valu.id} firstName={valu.name} />
      ))} */}


        {/* Full syntax with return keyword */}
        {/* {items.map((valu) => {
          return (
            <RenderList key={valu.id} number={valu.id} firstName={valu.name} />
          );
        })}  */}

        {items.map((valu) => ( 
          <RenderList key={valu.id} {...valu} />
        ))}
      </>
    </>
  );
}

export default UserList;

// =============================================== Key-Props =================================================== //
// ChatGPT Se Liya Hua Syntex --->  React.js me key prop ek important concept hai, jo mainly lists ko efficiently render karne me help karta hai. key prop se React ko ye samajhne me madad milti hai ki kaunse elements ko update, add, ya remove karna chahiye jab koi list render ho rahi hoti hai.

// ========================================== key Prop ka Importance ============================================= //
// ChatGPT Se Liya Hua Syntex ---> key Prop ka Importance:

// 1. Uniqueness: key prop ko har ek element ke liye unique hona chahiye. Ye uniqueness React ko efficiently re-render karne me madad karti hai jab list me koi change hota hai.

// 2. Performance: Agar key prop properly use kiya jaye, to React list me minimal re-renders karega, jo ki application ki performance ko improve karta hai.

// 3. Identity: key prop React ko ye batata hai ki ek particular element ki "identity" kya hai, jisse React efficiently state ko maintain kar sakta hai.

// ChatGPT Se Liya Hua Syntex ---> Example.
// import React from 'react';
// import RenderList from './RenderList';

// const items = [
//     { id: 1, name: 'Apple' },
//     { id: 2, name: 'Banana' },
//     { id: 3, name: 'Cherry' },
// ];

// function UserList() {
//   return (
//     <>
//       {/* Short syntax without return keyword */}
//       {items.map((valu) => (
//         <RenderList key={valu.id} number={valu.id} firstName={valu.name} />
//       ))}

//       {/* Full syntax with return keyword */}
//       {items.map((valu) => {
//         return <RenderList key={valu.id} number={valu.id} firstName={valu.name} />;
//       })}
//     </>
//   );
// }

// export default UserList;
