import React from "react";
import { useAuth } from "../context API/ContextAuth";
import { useNavigate, useLocation} from "react-router-dom";

function Login() {
 const {isLogin,setIsLogin} = useAuth();
 const location = useLocation(); 
  console.log("Login Page", location);
  const PreviousState  = location.state?. PreviousState || '/home'; // Iska matlab hai ke agar user jahan se login karne aaya hai, to login ke baad use wahi page par bheja jayega. Agar previous state (location) ki property available nahi hoti, to default "/home" page par redirect karenge. Yeh kaam useLocation ke saath kiya jata hai.


 const navigate = useNavigate();
 function userLogin (){
     setIsLogin(true); // Login ture hogi Nav se Login bhi out ho jaye ga nho show ho paye ga.

    navigate( PreviousState, {replace: true}); // Replace ka use isliye hota hai taake agar user logged in hai, to browser ke back button se login page par wapas na ja sake, jab tak user logout na kare.

 }

  return <div>
  <h1> Login Page</h1> 
  <button onClick={userLogin}> Login </button>
 
  </div>;
}

export default Login;
