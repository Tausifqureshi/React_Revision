import React from "react";

function InputForm( {userName , setUserName} ) {
  return <div>
  {/* InputForm */}
  <input type="text" name="userName" id="userName" value={ userName }/>
  </div>;
}

export default InputForm;
