import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Posts({id, name}) {
  const navigate = useNavigate();
  
  return <> 
  <h1> Posts Welecome </h1>
  <div style={{
    border: "1px solid #232323"
  }}>
      
  {/* ye Post page hai is components me share ke share post show hoge */}

  <Link to={`/PostDetails/${id}`}> <h1> {name} </h1> </Link>
  {/* Id ko string me chang kar re hai q ke o integer me mil ri hai id. id se hi ham jis number ki post pe click only ohi single show hoga postdetails me*/}
 
   <h1 onClick={()=>navigate(`/PostDetails/${id}`)}>{id}</h1>
    {/* onClick={() => navigate(`/productsInfo/${item.id}`)} */}
 
  </div>; 
  </>


}

export default Posts;
