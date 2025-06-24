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
import ProtectedRoutes from "./components/ProtectedRoutes";  
import Login from "./page/Login";
import ContextAuth from "./context API/ContextAuth";
// Humne "./page/index.js" file me saare components ko export kiya hai. Yahaan, hum destructuring ka use karke unhe import kar rahe hain, jise hum routes me use karenge.
                                                   
//Create Routers.
const router = createBrowserRouter(     
  createRoutesFromElements(
    <Route path="/" element={<NavBarRoot />}>
      {/* NavBarRoot component page ke har route me show hoga kyunki yeh parent component hai */}

      {/* Pehli baar jab koi page load hota hai, tab "/" path ki wajah se Home component hi dikhai dega, kyunki "/" root path ko represent karta hai.agar home type karte ho tu home nhi dhake ka click kane pe hi dehake ga */}
        <Route index element={<Home />} />   {/* 👈 Yeh line add karo */}
       <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="post"
        element={   
          <ProtectedRoutes>
            <Post />
          </ProtectedRoutes>  
        }
      /> 
      {/* Is component ko ProtectedRoutes se wrap kar rahe hain. Agar user logged in hai, to hi post page show hoga, warna user ko login page par redirect kar diya jayega. */}

      <Route path="post/:id" element={
       <ProtectedRoutes>
       <PostDetails /> 
       </ProtectedRoutes>} />
      {/* /* Ye route "/post/:id" dynamic parameter ko match karta hai, jab ID match hoti hai to PostDetails component open hota hai aur sirf usi ID wali post ka data display karta hai PostDetails Page pe. */}

       <Route path="login" element={<Login />} />

      <Route path="*" element={<Error />} />
      {/* Agar koi path match nahi hota, to Error component dikhai dega. "*" wildcard path ko represent karta hai */}
    </Route>

    
  ),  
  {
    future: {
      v7_startTransition: true, // Future flag enable kiya gaya
    },
  }
);

function ReactRouter() {
  return (
    <ContextAuth>
      <RouterProvider router={router} />;
    </ContextAuth>
  );
}

export default ReactRouter;
