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
             
            document.removeEventListener("mousemove",handleMouseEvent);// jab bhi checkbox pe click kar re components hide hoga tab ye event bhi remove ho jkaye gi mouseEvent work bhi nhi kar re ga X and Y direction me.
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