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

  return <div>ListTodos</div>;
}

export default ListTodos;
