import React, { useMemo, useState } from "react";

function UseMemoExample() {
  const [ add ,setAdd] = useState(0);
  const [ shaow ,setShaow] = useState(true);
  function btnHandle(){
    setAdd(add + 1);
  }
  function btnMinus (){
    if(add > 0 ){
      setAdd( add- 1)

    }
  }

  function extraComponets(add){ //ek paarmeter lera hai ye 
    console.log("Extra Componet", add);
    for(let i=0; i< 100000000; i++){} // Dynamic loops ya intensive calculations performance pe impact daal sakti hain. Is problem ko solve karne ke liye useMemo ka use kiya jata hai taaki result ko cache karke unnecessary re-calculations avoid ki ja sakein, aur overall performance improve ho.

   return add; // add return ho jaye ga;
  }

let number = useMemo(()=>{
return  extraComponets(add);  // extraCompoents Function ek argument me add pass kar re hai add upper wali value hai jab ham addtion kar re ge jo argument me value diya hai ohi value h1 number wale me show hogi.

}, [add]) // Ye function sirf tabhi call hoga jab `addition` ki value change hogi; kisi aur state ke change par yeh trigger nahi hoga. useMemo specific values ko memoize karta hai, jo unnecessary recalculations ko rokte hue React ki performance ko enhance karta hai. useMemo React ko zyada calculate karne se rokta hai, taake performance better ho sake.


  function showClick(){    
    console.log("Show Click Function");
    setShaow(!shaow)

  }

  return <div>
  <h1> ExtranComponents {number} </h1> 
  {/* Functon Print */}
 
  <h1> Addition Number: {add} </h1>
   <button type="button" onClick={btnHandle} style={{display: "block", margin: "auto"}}> Addition </button><br /><br />
   <button type="button" onClick={btnMinus} style={{display: "block", margin: "auto"}}> Minus </button> <br /> <br />

   <button type="button" onClick={showClick} style={{display: "block", margin: "auto"}}> Click </button> <br />
    <h1>  {shaow ? "Please Click": "Now Click"} </h1> 


  </div>;

}   
 
export default UseMemoExample;
