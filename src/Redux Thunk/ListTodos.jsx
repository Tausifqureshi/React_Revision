import React from "react";
import { useSelector } from "react-redux";

function ListTodos() {
    useSelector((state)=>{
        console.log("state mil ri hai", state);
      })
  return <div>ListTodos</div>;
}

export default ListTodos;
