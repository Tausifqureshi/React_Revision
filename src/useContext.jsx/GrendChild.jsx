import React, { useContext } from "react";
import { MyContext } from "./ContextAPI";
 
function GrendChild() {
//  const retrunValues = useContext(MyContext);
//  console.log(retrunValues);  //myfun mile ga jo ham ne ContextAPI compnents ke provider value dali hai ohi mile ga is se hame kahi bhi use kar sakte same is tara procees se har components me lene hoga myfun ya or bhi koi value.

   const { someFunction, key1, key2 } = useContext(MyContext); //MyComponents se jo milra hai us ko ham destructuring kar ke myFun lie.
  
  return (
    <div      
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
      }}
    >
      <h1>GrendChaild-Components</h1>
      <button onClick={someFunction}>Call My Fun</button>
      <p>{key1} {key2}</p>
    </div>
  );  
}    

export default GrendChild;
