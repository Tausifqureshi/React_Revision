import React, { createContext } from "react";
import ParentComponents from "./ParentComponents";

export const MyContext = createContext();

function ContextAPI() {
  const myFun = () => {
    console.log("Function Called");
  };
     
  
  return (
    <MyContext.Provider value={{
       key1: "value1",
       key2: "value2",
      someFunction: myFun,
      }}>
      
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8E4B2",
          height: "95vh",
          width: "35vw",
        }}
      >
        <h1> My-Components </h1>

        <ParentComponents />
      </div>
    </MyContext.Provider>
  );
}

export default ContextAPI;
