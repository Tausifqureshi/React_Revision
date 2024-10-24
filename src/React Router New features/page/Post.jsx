import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { useLoaderData } from "react-router-dom";

export async function fetchData() {
  const URL = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(URL);
    if (!response.ok) {
    
      throw Error(`Data not found this page`);
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
}

function Post() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="">
        <h1>Post Page Welcome</h1>
      <div>

        {data && (
          <>
            {data.map((user) => (
              <Posts key={user.id} {...user} />
            ))}
          </>
        )}
      </div>
      {/* } */}
    </div>
  );
}

export default Post;
