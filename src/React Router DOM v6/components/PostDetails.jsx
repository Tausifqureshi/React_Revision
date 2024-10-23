import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {

    const params= useParams();
    console.log(params);
    
  return <div>PostDetails</div>;
}

export default PostDetails;
