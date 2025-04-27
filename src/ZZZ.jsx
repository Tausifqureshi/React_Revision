import React from "react";
function ZZZ() {
  const firstName = "Quraishi";
  const lastName = (name) => {
    return name;
  };
  const fullName = `${firstName} ${lastName("Tausif")}`; 
  console.log("Full Name:", fullName);
   let lastName1 = "Tausif"; // Variable declaration
  const lastName2 = "Tausif"; // Constant declaration
  console.log("lastName1:", lastName1); // Output: Tausif
  console.log("lastName2:", lastName2);
  

  return (
    <>  
      <h1
        onClick={() => {
          lastName("Tausif");
        }}
      >
        ZZZ
      </h1>
      <h1>My name is {firstName}</h1>
    </>
  );
}

export default ZZZ;
