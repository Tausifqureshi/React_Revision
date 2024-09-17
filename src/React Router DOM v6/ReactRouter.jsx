import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Error from "./page/Error";
import Contact from "./page/Contact";
import Post from "./page/Post";

//Create Routers.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* First Home page hi show hoga us me koi path nhi diye hai sirf / is liye hompage hi show hoga phele */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<Error />} />
    </>
  )
);
function ReactRouter() {
  return <RouterProvider router={router} />;
}

export default ReactRouter;
