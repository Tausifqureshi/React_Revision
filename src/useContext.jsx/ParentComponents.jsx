import React from "react";
import ChaildCopmonets from "./ChaildCopmonets";

function ParentComponents({ myFun}) {
  return (
    <div
      style={{
        backgroundColor: "#9ED2BE",
        padding: "2rem",
      }}
    >
      <h1>Prarend-Components</h1>

      <ChaildCopmonets  myFun={ myFun}/>
    </div>
  );
}

export default ParentComponents;
