import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, updateTodos  } from "./thunkSlice";

function FormTodos() {
 const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.myExampleTodos.data); // Todos ko store se select karenge


  function submitHandler(e){
    e.preventDefault();
    // dispatch(addTodos(title))
    // setTitle("");

    if(editId){
      // 🔥 EDIT DISPATCH
      dispatch(updateTodos({id:editId, title:title}));
      setEditId(null);
    }
    else{
      // 🔥 ADD DISPATCH
      dispatch(addTodos(title));
    }
    setTitle("");

  }
  
   // 🔥 EDIT HANDLER (find use ho raha)
  function handleEdit(id) {
    const todo = todos.find((t) => t.id === id); // ✅ find()
    if (!todo) return;

    setTitle(todo.title);
    setEditId(id);
  }
  return (
    <>
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
      <button type="submit">
      {editId ? "Update Todo" : "Add Todo"}
      </button>
      </div>
    </form>
     {/* 👇 handleEdit ko globally expose (simple way) */}
      {(window.editTodoById = handleEdit)}
    </>
  );
}

export default FormTodos;
