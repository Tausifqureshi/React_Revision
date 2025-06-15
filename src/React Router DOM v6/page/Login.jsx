import React from "react";
import { useAuth } from "../context API/ContextAuth";
import { useNavigate, useLocation} from "react-router-dom";

function Login() {
 const {isLogin,setIsLogin} = useAuth(); 
 const location = useLocation(); 
 console.log("Login Page", location);
const PreviousPathname  = location.state?. PreviousPathname || '/home'; // Iska matlab hai ke agar user jahan se login karne aaya hai, to login ke baad use wahi page par bheja jayega. Agar previous state (location) ki property available nahi hoti, to default "/home" page par redirect karenge warna jis page se user login ke liye aya hai us se wahi page pe bheja ajye ga login ke baad. Yeh kaam useLocation ke saath kiya jata hai.
 
 const navigate = useNavigate();
 
 function userLogin (){
     setIsLogin(true); // Login ture hoga Navbar se Login bhi nhi show ho ga us ki jaga logout show hoga .
  
    navigate( PreviousPathname, {replace: true}); // Replace ka use isliye hota hai taake agar user logged in hai, to browser ke back button se login page par wapas na ja sake, jab tak user logout na kare.

 }

  return <div>
  <h1> Login Page</h1> 
  <button onClick={userLogin}> Login </button>
 
  </div>;
}

export default Login;
