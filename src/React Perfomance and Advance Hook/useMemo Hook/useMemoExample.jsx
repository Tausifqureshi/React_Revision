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



  function extraComponets(add){ //ek paarmeter lera hai ye 
    console.log("Extra Componet");
    for(let i=0; i< 1000000; i++){} // Dynamic loops ya intensive calculations performance pe impact daal sakti hain. Is problem ko solve karne ke liye useMemo ka use kiya jata hai taaki result ko cache karke unnecessary re-calculations avoid ki ja sakein, aur overall performance improve ho.

  }

  return <div>
  <h1> Addition Number: {add} </h1>
   <button type="button" onClick={btnHandle} style={{display: "block", margin: "auto"}}> Addition </button><br /><br />
   <button type="button" onClick={btnMinus} style={{display: "block", margin: "auto"}}> Minus </button>
  </div>;

}   
 
export default UseMemoExample;
