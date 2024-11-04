import React, { useMemo, useState } from "react";
// useMemo ka use kisi computed value ko cache karne ke liye kiya jata hai, taaki wo value unnecessary re-calculations se bachi rahe. Yeh value tabhi re-compute hoti hai jab specified dependencies change hoti hain, jo performance optimize karne mein madadgar hai.

function UseMemoExample1() {
  const [addition , setAddition] = useState(0);
  const [minus, setMinus] = useState(20);



  const multipluction = useMemo(function multiply(){ // Ye function bas ek example hai, koi use case nahi hai, React mein state change par har function re-render hota hai. is se rukne ke liye hi hai useMemo ka use karta hai taki parfomance pe issu na ho.

    console.log(" Multiply Function Called ");// Minus function click par bhi yaha baar-baar call ho raha hai, jo React ki performance pe impact daal sakta hai. Is issue ko avoid karne ke liye, hum useMemo ka use kar sakte hain taaki ye function tabhi re-render ho jab dependencies change ho.

   return addition *10

  }, [addition]); // Ye function tabhi call hoga jab `addition` ki value change hoti hai, aur kisi aur state change pe yeh trigger nahi hoga.
  
  function counterIncrease() {
    setAddition ((prevState) => prevState + 1);
  }

  function counterDecrease () {    
    if(addition > 0){
      setAddition((prevState) => prevState - 1)
    }
  }

  function minusHandle(){
    if (minus > 1) {
    setMinus(minus - 1);
      
    }
  }
  
 
  return (
    <div>
     <h1> Multiply Function Called : {multipluction} </h1>
      <br /> <br />
      <p> Additions Number : { addition } </p>
      <button  onClick={counterIncrease}  style={{ background: "red", display: "block", margin: "auto", }}>
       Addition
      </button> <br /> <br />

      <button  onClick={counterDecrease}  style={{ background: "red", display: "block", margin: "auto", }}>
      Minus-2
      </button> <br /> <br />
            
      <p> Minus Number : { minus } </p>
      <button onClick={ minusHandle } style={{ background: "#323232", display: "block", margin: "auto", }}>
         Minus
      </button>


    </div>
  );
}

export default UseMemoExample1;
