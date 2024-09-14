import React from "react";

function GrendChild({myFun}) {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
      }}
    >
      <h1>GrendChaild-Components</h1>
      <button onClick={myFun}>Call My Fun</button>
    </div>
  );
}

export default GrendChild;
