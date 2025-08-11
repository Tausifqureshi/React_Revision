// react form hook
// validtion --> yap library

//  z-stand --->  library
// react query ---> data fetching library

import React, { useState } from "react";
import { useEffect } from "react";           
function Z() {             
  console.log("Z");                                                         
  const [firstName, setFitstName] = useState("Tausif");
  const [toggls, setToggls] = useState(true);
  function changeName() {
    // if (firstName === "Tausif") {
    //   setFitstName("Qureshi")
    // }
    // else {
    //   setFitstName("Tausif")
    // }

    setToggls(!toggls); //toggle kanr ke liye 
  
    // setFitstName(firstName === "Tausif" ? "Qureshi" : "Tausif");
    // setFitstName(!firstName);
  }
  useEffect(() => {
    console.log("useEffect render ");

    return () => {
      console.log("useEffect cleanup");
    };
  }, []);

  return (    
    <>
      <h1> Parctice</h1>
      <h2>{toggls ? "Qureshi" : "Tausif"}</h2>
      {/* <h2>{firstName ? "Qureshi" : "Tausif" }</h2> */}

      <button onClick={changeName}> Change Name</button>
    </>
  );
}
export default Z;

