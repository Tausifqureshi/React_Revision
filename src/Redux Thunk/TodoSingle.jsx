import React from "react";

function TodoSingle({ id, title, completed }) {
  return (
    <>
    <div
      style={{ border: "1px solid #323232", width: "50%", margin: "2rem auto", padding: "2rem"}}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>completed: {completed ? "completed" : "not completed"}</p>
     <div  style={{display: "flex", justifyContent: "center", gap: "1rem" }}>
     <button> Delete</button>
     <button> Toggle </button>
     </div>
    </div>
   
    </>
  );
}

export default TodoSingle;
