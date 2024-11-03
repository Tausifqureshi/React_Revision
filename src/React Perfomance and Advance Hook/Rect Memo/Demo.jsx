import React, { useState } from "react";
import Card from "./Card";

function Demo() {
  console.log("Demo Component");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  function checkboxHandle(event) {
    const { name, checked } = event.target;
    // console.log("Name Render", event.target.name);
    // console.log("Checked Render", event.target.checked);.
    
    if (name === "state1") {
      setState1(checked);
    } else if (name === "state2") {
      setState2(checked);
    }
  }  

  let result = () =>{
    let fruits = ["apple","mango","banana","orange","kiwi"];
  //  fruits.forEach((value, index)=>{
  //   console.log(`index ${index} Value ${value}`);
  //  })


  // for(let i = 0; i < fruits.length; i++){
  //   console.log(`Index ${i} Value ${fruits[i]}`);
  // }
     
  // for(let frus in fruits){
  //   console.log(`Index ${frus} Value ${fruits[frus]}`);
  // }

   for( let fu in fruits){
    if(fruits[fu] === "banana"){
      // break;
      continue;
    }
    console.log(`Index Of ${fu} Value ${fruits[fu]}`);
    console.log(fruits[fu]);
   }

     
   }
 
   result()
  return (
    <>
      <div style={{ background: "#efefef", padding: "2rem", margin: "1rem" }}>
        <label htmlFor="state1"> State1 </label>
        <input
          type="checkbox"
          name="state1"
          id="state1"
          checked={state1}
          onChange={checkboxHandle}
        />

        <label htmlFor="state2"> State2 </label>
        <input
          type="checkbox"
          name="state2"
          id="state2"
          checked={state2}
          onChange={checkboxHandle}
        />
        <Card state1={state1} />
      </div>
    </>
  );
}

export default Demo;








