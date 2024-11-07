import React from "react";
import CallBackExample from "./CallBackExample";


// useCallback ka use isliye kiya jata hai taaki function ko unnecessary re-renders se bachaya ja sake, khaaskar jab function ko child component mein props ke taur par pass kiya jata hai. Yeh ensure karta hai ke function tabhi re-create ho jab dependencies change hon, isse performance improve hoti hai aur extra function re-renders avoid hote hain. useCallBack ek memoize function retrun karta hai.

function UseCallBackHook() {
  return <div>

 <h1> UseCallBack Hook </h1>
<CallBackExample />

  </div>;
}

export default UseCallBackHook;
