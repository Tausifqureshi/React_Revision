import Posts from "../components/Posts";
import { redirect, useLoaderData } from "react-router-dom";

const URL = "https://jsonplaceholder.typicode.com/users";
export async function fetchData( {request}, {isLogin}) { // object me se dectucturing kar ke login nikal re hi
  // console.log("object Print",obj);
  // console.log("object Print",isLogin);
  
  // console.log("Arguments Prints",arg); 
  // console.log("Arguments Prints",arg.request.url); // 
  console.log("Arguments Prints",request); // 
  if (request && request.url) {
    try {
      const url = new URL(request.url);
      console.log(url);
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  } else {
    console.error("Request object does not have a 'url' property.");
  }
  

  if (!isLogin) {
    return redirect("/login");
   }

    const response = await fetch(URL);
   
    if (!response.ok) {
    
      throw Error(`Data not found this page`);
    }
    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
}

function Post() {
  const data = useLoaderData();
  // console.log(data);

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
// / user login nhu hai jab tak network tab me fetch nhi hogi users api is logic se useloder use tu aisa logic lagana hota hai