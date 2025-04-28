import React, { version } from "react";
function ZZZ() {
  const firstName = "Quraishi";
  const lastName = (name) => {
    return name;
  };
  const fullName = `${firstName} ${lastName("Tausif")}`;
  console.log("Full Name:", fullName);

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
      <h1>React {version}</h1>
    </>
  );
}

export default ZZZ;
