import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./page/About";
import Error from "./page/Error";

function ReactRouter() {
  //Create Routers.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<h1>Home-Page </h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default ReactRouter;
