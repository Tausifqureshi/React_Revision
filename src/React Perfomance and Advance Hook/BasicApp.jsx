import React, { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponents from "./ExtraComponents";

function BasicApp() {
  console.log("Basic App Render");
  
  return (
    <div>
      <h1> BasicApp </h1>
      <InputForm />
      <ExtraComponents />
    </div>
  );
}

export default BasicApp;
