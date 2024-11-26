import React, { useState } from "react";

function FormTodos() {
  const [title, setTitle] = useState("");
  function addTodos(e){
    e.preventDefault()

  }

  return (
    <form onSubmit={addTodos}>
      <div style={{width: "20rem", margin: "1rem"}}>
      <input 
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add Todos </button>
      </div>
    </form>
  );
}

export default FormTodos;
