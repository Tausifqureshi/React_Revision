import React, { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponents from "./ExtraComponents";

function BasicApp() {
    const [userName, setUserName] = useState("")
  return <div>

  <h1> BasicApp </h1>
  <InputForm userName={userName} setUserName={setUserName} />
  <button onClick={()=> setUserName("")}> Clear Input </button>
  <ExtraComponents/>
  
  </div>;
}

export default BasicApp;
