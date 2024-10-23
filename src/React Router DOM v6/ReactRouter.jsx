import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; //React-Router-Dom Import.


import { Home, About, Contact, Post, Error } from "./page";
import NavBarRoot from "./layout/NavBarRoot";
import PostDetails from "./components/PostDetails";
// Humne "./page/index.js" file me saare components ko export kiya hai. Yahaan, hum destructuring ka use karke unhe import kar rahe hain, jise hum routes me use karenge.

//Create Routers.
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<NavBarRoot />}>
    {/* NavBarRoot component page ke har route me show hoga kyunki yeh parent component hai */}
  
      {/* Pehli baar jab koi page load hota hai, tab "/" path ki wajah se Home component hi dikhai dega, kyunki "/" root path ko represent karta hai.agar home type karte ho tu home nhi dhake ka click kane pe hi dehake ga */}
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      
      <Route path="post" element={<Post />} />

      <Route path="post/:id" element={<PostDetails/>} />
      {/* /* Ye route "/post/:id" dynamic parameter ko match karta hai, jab ID match hoti hai to PostDetails component open hota hai aur sirf usi ID wali post ka data display karta hai PostDetails Page pe. */ }


      <Route path="*" element={<Error />} />
      {/* Agar koi path match nahi hota, to Error component dikhai dega. "*" wildcard path ko represent karta hai */}
    </Route>
  )
);

function ReactRouter() {
  return <RouterProvider router={router} />;

}

export default ReactRouter;
