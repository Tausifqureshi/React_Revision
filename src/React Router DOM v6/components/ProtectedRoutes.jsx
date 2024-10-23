import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({children}) {
    let user = false;
    if(user){
        return children;// Children Post components  hai is protectedRoutes components ka.

    } else {
        return <Navigate to='/login' />; 
        // Jab kisi component ko return karte hue navigation karni hoti hai, to <Navigate> ka use hota hai. Lekin agar programmatically, kisi function ke andar se navigation karni ho, to useNavigate hook ka use karte hain. Dono ka kaam navigation karna hai, lekin <Navigate> component rendering ke time hota hai aur useNavigate functional logic ke time.

      }

  
}

export default ProtectedRoutes;
