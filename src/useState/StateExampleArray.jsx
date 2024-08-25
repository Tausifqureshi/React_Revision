import React, { useState } from "react";

// useState me Array bhi store kare sakte hai referance type data.

function StateExampleArray() {
  const [fruits, setFruit] = useState(["Apple", "Mango", "Banana"]);
  return (
    <>
     <ul>
        {fruits.map((fruit)=>{
           return <li key={fruit}>{fruit}</li>
        })}
     </ul>
    </>
  );
}

export default StateExampleArray;
