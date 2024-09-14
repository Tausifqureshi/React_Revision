import React from "react";
import ParentComponents from "./ParentComponents";

function ContextAPI() {
  const  myFun = () =>{
    alert("Function Called");
    console.log("Function Called");
  }
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#C8E4B2",
        height: "95vh",
        width: "35vw",
      }}
    >
      <h1> My-Components </h1>

      <ParentComponents  myFun={ myFun}/>
    </div>
  );
}

export default ContextAPI;
