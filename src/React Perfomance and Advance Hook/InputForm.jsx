import React from "react";
import styles from "./InputForm.module.css";

function InputForm( {userName , setUserName} ) {
  function inputHandler(e){
    setUserName(e.target.value);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  }
  return <div>
  {/* InputForm */}
  <input type="text" name="userName" id="userName" value={ userName } onChange={inputHandler}/>
  </div>;
}

export default InputForm;
