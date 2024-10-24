import React from "react";
import { Link } from "react-router-dom";

function Posts({id, name}) {
  return <div style={{
    border: "1px solid #232323"
  }}>

  <Link to={id.toString()}> <h1> {name}</h1> </Link>
  {/* Id ko string me chang kar re hai q ke o integer me mil rim hai */}
 
  <h1>{id}</h1>

  </div>;

}

export default Posts;
