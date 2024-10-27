import React, { useState } from "react";
import InputForm from "./IIInputForm";

function BasicApp() {
    const [userName, setUserName] = useState("")
  return <div>

  <h1> BasicApp </h1>
  <InputForm userName={userName} setUserName={setUserName} />
  <button onClick={()=> setUserName("")}> Clear Input </button>
  
  </div>;
}

export default BasicApp;
