import React, { useState } from "react";

function UseMemoExample() {
  const [ add ,setAdd] = useState(0);
  const [ shaow ,setShaow] = useState(false);
  function btnHandle(){
    setAdd(add + 1);
  }


  function btnMinus (){
    if(add > 0 ){
      setAdd( add- 1)

    }
  }

  return <div>
  <h1> Addition Number: {add} </h1>
   <button type="button" onClick={btnHandle} style={{display: "block", margin: "auto"}}> Addition </button><br /><br />
   <button type="button" onClick={btnMinus} style={{display: "block", margin: "auto"}}> Minus </button>
    </div>;

}   
 
export default UseMemoExample;
