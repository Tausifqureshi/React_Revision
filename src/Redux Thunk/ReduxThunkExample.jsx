import React from "react";
import { useSelector } from "react-redux";



function ReduxThunkExample() {
  useSelector((state)=>{
    console.log("state mil ri hai", state);
  })
  return <div>
     <h1> ReduxThunkExample </h1>
  </div>; 
}

export default ReduxThunkExample;
