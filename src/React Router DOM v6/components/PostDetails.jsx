import React from "react";
import { useParams } from "react-router-dom";
const URL = "https://jsonplaceholder.typicode.com/users"

function PostDetails() {

    // const params= useParams();
    const {id}= useParams(); // useParams se destructuring karke URL se id nikal rahe hain, jo React Router ke routes me defined hai. Agar route me id ka naam kuch aur hoga, to useParams me bhi wahi naam dena hoga aur PostDetails component me bhi wahi naam use karna padega.

    console.log(id);
    
  return <div>PostDetails</div>;
}

export default PostDetails;
