import React, { useState } from "react";

function UseMemoExample1() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  function counterIncrease() {
    setCounter((prevState) => prevState + 1);
  }

  const countNumber = (num)=>{
    console.log("Count Function Called", num);
    for (let i = 0; i < 1000; i++) {}
    
    return num;
  }

  const saveCountValue = countNumber(counter);


  return (
    <div>
      <h1> UseMemoExample1 </h1> <br />
      <p> My Number : {saveCountValue} </p>
      <button onClick={counterIncrease} style={{ background: "red", display: "block", margin: "auto", }}>
        Counter
      </button> <br /> <br />

      <button onClick={()=>setToggle(!toggle)} style={{ background: "#323232", display: "block", margin: "auto", }}>
        {toggle? "You Clicked": "Please Cliked Now"}

      </button>







    </div>
  );
}

export default UseMemoExample1;
