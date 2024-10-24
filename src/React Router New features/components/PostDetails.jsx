import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export async function fetchSinglePost({params}) { // React Router DOM hi parameters provide karta hai. Isme se hum kisi bhi parameter ko extract kar sakte hain. Jab console log karenge, to ek params object milega, jisme id jaise values hongi. useLoader ke time id isi params object se milti hai.params se id ko destucturing  kar re hai.
 const url = "https://jsonplaceholder.typicode.com/users"
 console.log(params);

  try {
    const response = await fetch(`${url}/${params.id}`);
  
    const responseData = await response.json();
    console.log(responseData);
    return responseData
  
  } catch (error) {
    console.log(error);
   
  }
  
}

function PostDetails() {
  const data = useLoaderData();
   console.log('postDetails', data);
  return <div>
   <h1>Single Post</h1>
     {data && 
     <div style={{border: "1px solid #232323"}}>
     <h1>{data.name}</h1>
     <h3>{data.username}</h3>
     <p>{data.address.city}</p>
     <p>{data.address.catchPhrase}</p>
     </div>
     }

   </div>;
}

export default PostDetails;
