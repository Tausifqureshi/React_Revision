import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDatat } from "./thunkSlice";

function ListTodos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.myExampleTodos.data); // Todos ko store se select karenge
  console.log("initial state mil ri hai", todos);

  // useSelector((state)=>{
  //     console.log("state mil ri hai", state);
  //   })
  
  useEffect(() => {
    dispatch(fetchDatat()); // Thunk function ko dispatch karenge
  }, [dispatch]); // dispatch ko dependency array mein dena zaroori hai

  return <div>
    <h1>Todos List</h1>
      <ul>
        {todos.length === 0 ? (
          <p>No todos available.</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li> // Map kar ke todos ko display karenge
          ))
        )}
      </ul>
  </div>;
}

export default ListTodos;
