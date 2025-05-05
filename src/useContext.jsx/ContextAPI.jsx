import React, { createContext } from "react";
import ParentComponents from "./ParentComponents";

export const MyContext = createContext();

function ContextAPI() {
  const myFun = () => {
    console.log("Function Called");
  };
          
    
  return (
    <MyContext.Provider value={{      //Provider se hamne ParentComponents wrap kiya hai ab ham ParentComponents ke jitne bhi chaild hai us me context api compoent ki value direct pass kar skate hai agar app components wrap tu  pure ke pure project me value pass kar sakte hai. 
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
