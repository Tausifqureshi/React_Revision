import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; //React-Router-Dom Import.

import { Home, About, Contact, Post, Error } from "./page";
// Humne "./page/index.js" file me saare components ko export kiya hai. Yahaan, hum destructuring ka use karke unhe import kar rahe hain, jise hum routes me use karenge.

//Create Routers.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Pehli baar jab koi page load hota hai, tab "/" path ki wajah se Home component hi dikhai dega, kyunki "/" root path ko represent karta hai */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<Error />} />
      {/* Agar koi path match nahi hota, to Error component dikhai dega. "*" wildcard path ko represent karta hai */}
    </>
  )
);
function ReactRouter() {
  return <RouterProvider router={router} />;
}

export default ReactRouter;
