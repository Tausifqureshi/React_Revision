import React from "react";
import GrendChild from "./GrendChild";

function ChaildCopmonets({ myFun}) {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#7EAA92",
      }}
    >
      <h1>Chaild-Components</h1>
      <GrendChild myFun={myFun}/>
    </div>
  );
}

export default ChaildCopmonets;
