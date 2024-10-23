import React from "react";
import { useAuth } from "../context API/ContextAuth";
import { useNavigate} from "react-router-dom";

function Login() {
 const {isLogin,setIsLogin} = useAuth();
 const navigate = useNavigate();
 function userLogin (){
     setIsLogin(true); // Login ture hogi Nav se Login bhi out ho jaye ga nho show ho paye ga.
    navigate('/home', {replace: true}); // Replace ka use isliye hota hai taake agar user logged in hai, to browser ke back button se login page par wapas na ja sake, jab tak user logout na kare.

 }

  return <div>
  <h1> Login Page</h1> 
  <button onClick={userLogin}> Login </button>
 
  </div>;
}

export default Login;
