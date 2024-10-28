import React, { useState } from "react";
import Card from "./Card";

function Demo() {
    console.log("Demo Component");
  const [ state1, setState1] = useState(false);
  const [ state2, setState2] = useState(false);


   function checkboxHandle(event) {
    const { name, checked } = event.target;
    console.log( "Name Render",event.target.name);
    console.log( "Checked Render",event.target.checked);
    if (name === "state1") {
      setState1(checked);
    } else if (name === "state2") {
      setState2(checked);
    }
  }

  return <>
  <div style={{ background: "#efefef", padding: "2rem", margin: "1rem"}}>
     <label htmlFor="state1"> State1 </label>
     <input type="checkbox" name="state1" id="state1" checked={state1} onChange={checkboxHandle}/>
     
     <label htmlFor="state2"> State2 </label>
     <input type="checkbox" name="state2" id="state2" checked={state2} onChange={checkboxHandle}/>
     <Card  state1= {state1} />
     </div>


  
  </>
}

export default Demo;
