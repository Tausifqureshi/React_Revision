import React, { useEffect, useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
// single post ke liye ye components hai jo od macth hogi o post is pe show hoga.

export async function fetchSinglePost({params}, {islogin}) { // React Router DOM hi parameters provide karta hai. Isme se hum kisi bhi parameter ko extract kar sakte hain. Jab console log karenge, to ek params object milega, jisme id jaise values hongi. useLoader ke time id isi params object se milti hai.params se id ko destucturing  kar re hai.
  if (!islogin) {
    return redirect('/login');
   }
   console.log(params);
   console.log(islogin);
   
 const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(`${url}/${params.id}`);
  
    if (!response.ok) {
      throw Error(`Data not found this page`);
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData 
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
