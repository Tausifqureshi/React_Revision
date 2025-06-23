import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
function ContextAuth({ children}) {                 
  const [isLogin, setIsLogin] = useState(false);


  return (
    <AuthContext.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,  
      }}
    > 
        {children}
        {/* Conetxt Auth */}

    </AuthContext.Provider>
  );
}
      

export function useAuth(){ // Yeh function length code ko reduce karta hai, kyunki har component me useContext aur AuthContext ko baar-baar import karne ki zaroorat nahi padti.
return useContext(AuthContext)
}
export default ContextAuth;




// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export function ContextAuth({ children }) {
//   const [isLogin, setIsLogin] = useState(false);

//   useEffect(() => {
//     const savedLogin = localStorage.getItem("isLogin");
//     if (savedLogin === "true") {
//       setIsLogin(true);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("isLogin", isLogin);
//   }, [isLogin]);

//   return (
//     <AuthContext.Provider value={{ isLogin, setIsLogin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default ContextAuth;