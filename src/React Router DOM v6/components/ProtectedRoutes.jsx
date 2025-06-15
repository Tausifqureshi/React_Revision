import React from "react";
import { Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../context API/ContextAuth";
import PreviousState from "../../useState Hook/PreviousState";
function ProtectedRoutes({children}) {
    const { isLogin, setIsLogin} = useAuth();
    const location = useLocation();  // useLocation hook ka use isliye hota hai taake user ko login karne ke baad wahi page par wapas bheja ja sake jahan se wo aaya tha, na ki home page par. Yeh ensure karta hai ke login ke baad user ko uske previous location par redirect kiya jaye. ye ek Object return karta hai.
    // console.log("Protect Routes Components location",location);
    console.log("🔐 ProtectedRoutes — path:", location.pathname, "isLogin:", isLogin);
   
    if(isLogin){   
        return children;// Children Post components  hai is protectedRoutes components ka.user Login tohi Post components show hoga warna loginpage pe navigate kar dega else wala first login karna hoga.
    } else {
        return <Navigate to='/login' replace state={{ 
            PreviousPathname: location.pathname,
        }}/>;  
        // Jab kisi component ko return karte hue navigation karni hoti hai, to <Navigate> ka use hota hai. Lekin agar programmatically, kisi function ke andar se navigation karni ho, to useNavigate hook ka use karte hain. Dono ka kaam navigation karna hai, lekin <Navigate> component rendering ke time hota hai aur useNavigate functional logic ke time.

      }
 
  
}

export default ProtectedRoutes;
