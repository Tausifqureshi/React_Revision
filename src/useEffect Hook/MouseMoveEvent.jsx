import React, {useEffect, useState} from 'react'

function MouseMoveEvent() {
  const[mousePosition, setMousePosition] = useState({x: 0, y: 0}); //Initial Value hai ye.
  function handleMouseEvent(e){
    console.log({x: e.clientX, y: e.clientY}); 
    setMousePosition({x: e.clientX, y: e.clientY}); //jo value print karan o is me jaye gi tab hi jake p element me show hogi
  }       
    useEffect(() => {
        console.log("Call useEffect Function");
        document.addEventListener("mousemove",handleMouseEvent);
        return ()=>{
            console.log("Cleanup Function Return Call");// Jab bhi components ko hide kar re ge cleanup function call hoga or mouseEvent bhi remove hoga q ke cleanup function ke ander hi removeAdd evntlistener lagaye hai.
             
            document.removeEventListener("mousemove",handleMouseEvent);// jab bhi checkbox pe click kar re components hide hoga tab ye event bhi remove ho jaye ga mouseEvent work bhi nhi kar re ga X and Y direction me.
        }
    
    
      }, []);
  return (
    <div>
   <h1> MouseMoveEvent </h1>
    <p>X-Horizental: {mousePosition.x}</p>
    <p>Y-Vartical: {mousePosition.y}</p>
    </div>
  )
}

export default MouseMoveEvent







//  LocalStorage me data save karne ke liye useEffect ka use karte hai.
// import React, { useEffect, useState } from 'react';

// function MouseMoveEvent() {

//   const [name, setName] = useState([]);
//   const [tempName, setTempName] = useState(""); // Input ki temporary state

//   // Component mount hone ke 2 sec baad localStorage se load karna
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       const savedNames = JSON.parse(localStorage.getItem("name")) || []; 
//   setName(savedNames); // bas JSON.parse laga do, split hata do
//   setTempName("");
//     }, 2000);

//     return () => clearTimeout(timeoutId);
//   }, []);

//   // Jab tempName change ho to 1 sec baad localStorage me save karna
//   useEffect(() => {
//     if (tempName === "") return; // empty input par save mat karna

//     const timeoutId = setTimeout(() => {
//       // localStorage.setItem("name", tempName);
//       // setName(...name, tempName);
//        const updatedNames = [...name, tempName]; // purani array me naye name ko add karo
//       localStorage.setItem("name", JSON.stringify(updatedNames)); // array ko string me convert karke save karo
//       setName(updatedNames);
//       setTempName("");
//       console.log("Saved to localStorage:", tempName);
//     }, 1000);

//     // Agar tempName jaldi change ho to pehle ka timeout cancel kar do (debounce)
//     return () => clearTimeout(timeoutId);
//   }, [tempName]);

//   return (
//     <div>
//       <h2>Hello, {name.join(" ") || "Guest"}</h2>
//       {/* <h2>Hello, {name.length > 0 ? name.join(" ") : "Guest"}</h2> */}

//       <input
//         type="text"
//         placeholder="Type your name"
//         value={tempName}
//         onChange={(e) => setTempName(e.target.value)}
//       />
//       <p>Typing: {tempName}</p>
//     </div>
//   );



// }

// export default MouseMoveEvent