import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./thunkSlice";

function FormTodos() {
 const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function submitHandler(e){
    e.preventDefault();
    dispatch(addTodos(title))
    setTitle("");
  }
  
  return (
    <form onSubmit={submitHandler}>
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
