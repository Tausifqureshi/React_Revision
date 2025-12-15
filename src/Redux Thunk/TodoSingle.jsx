import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodos,toggleTodos } from "./thunkSlice";

function TodoSingle({ id, title, completed }) {
    const dispatch = useDispatch();
    function handleDelete(){
       dispatch(deleteTodos(id));
    }

    function handleToggle(){
        dispatch(toggleTodos({id:id,completed:completed}));
    } 

  return (
    <>
    <div
      style={{ border: "1px solid #323232", width: "50%", margin: "2rem auto", padding: "2rem"}}
    >
      <p>id: {id}</p>
      <p style={{ textDecoration: completed ? "line-through" : "" }}>title: {title}</p>
      <p>completed: {completed ? "completed" : "not completed"}</p>
     <div  style={{display: "flex", justifyContent: "center", gap: "1rem" }}>
     <button onClick={handleDelete}> Delete</button>
     <button onClick={handleToggle}> Toggle </button>
     </div>
        {/* 🔥 EDIT */}
      <button onClick={() => window.editTodoById(id)}>
        Edit
      </button>
    </div>  
   
    </>
  );
}

export default TodoSingle;
