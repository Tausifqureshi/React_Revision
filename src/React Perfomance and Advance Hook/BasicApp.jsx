import React, { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponents from "./ExtraComponents";


function BasicApp() {
  console.log("Basic App Render");
  
  return (
    <div>
      <h1> BasicApp </h1>
      
      <InputForm />
      {/* <InputForm> */}

      {/* <ExtraComponents /> */}
      {/* is ke ander bhi aisa childr propes use tobhi compoennts render nhi hoga ExtracOmpoemnts only ohi compoenngs render jin ka state change hoga bus  */}
      {/* </InputForm> */}
      <ExtraComponents />
    </div>
  );
}

export default BasicApp;
