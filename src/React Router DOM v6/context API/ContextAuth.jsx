import React, { createContext, useContext, useState } from "react";

export const AuthContetx = createContext();
function ContextAuth({ children}) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AuthContetx.Provider
      value={{
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}
    >
        {children}
        {/* Conetxt Auth */}

    </AuthContetx.Provider>
  );
}


export function useAuth(){ // Yeh function length code ko reduce karta hai, kyunki har component me useContext aur AuthContext ko baar-baar import karne ki zaroorat nahi padti.
return useContext(AuthContetx)
}
export default ContextAuth;
