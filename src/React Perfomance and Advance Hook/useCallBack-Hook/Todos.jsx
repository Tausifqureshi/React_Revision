import React, { memo } from "react";


function Todos({todos, addTodo, removeTodo}) {
    console.log("Todos Chaild Components Called");

  return <div>
   {/* Display todo items */}
   {todos.map((todo, index) => (
  <h3 key={todo.id}> {todo.text} {index + 1}</h3>
   // Todos mein hamesha +1 add hota rahega, yani agar index 1 hai toh next 2 hoga, aur agar 2 hai toh next 3 hoga, aur aise hi aage.
))}
  <div style={{ display: "flex", justifyContent: "center", gap: "2rem"}}>
  <button type="button" onClick={addTodo}>Add Todo</button>

  {todos.map((todo) => (
    <button key={todo.id} type="button" onClick={() => removeTodo(todo.id)}>
        Remove Todo
         {/* {todo.id}   */}
    </button>
    ))}
  </div>

  
 
  </div>;
}

export default memo (Todos);
