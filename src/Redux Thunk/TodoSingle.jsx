import React from "react";

function TodoSingle({id, title, completed}) {
  return <div>
       <p>id : {id}</p>
       <p>title: {title}</p>
       <p>completed: {completed}</p>
  </div>;
}

export default TodoSingle;
