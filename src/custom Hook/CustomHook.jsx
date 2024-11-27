import React from "react";
import useFetch from "./useFetch"; //Custom-Hooks Imports.
function CustomHook() {
  const { data, pending,isError } = useFetch("https://jsonplaceholder.typicode.com/users");
  if(pending){
    return <h1>Loading</h1>
  }
      
  if(isError){
    // return <h1>{isError}</h1>
  } 

  return (
    <>
  
      <div>
        {data &&
          data.map((valu) => (
            <div key={valu.id}>
              <h4>{valu.username}</h4>
            </div>
          ))}
      </div>
    </>
  );
}

export default CustomHook;
