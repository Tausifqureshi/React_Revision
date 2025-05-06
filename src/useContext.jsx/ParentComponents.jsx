import React from "react";
import ChaildCopmonets from "./ChaildCopmonets";

  

function ParentComponents() {
             
  return (
    <div  
      style={{
        backgroundColor: "#9ED2BE",
        padding: "2rem",
      }}
    >
      <h1>Prarend-Components</h1>

      <ChaildCopmonets  />
    </div>
  );  
}  

export default ParentComponents;
