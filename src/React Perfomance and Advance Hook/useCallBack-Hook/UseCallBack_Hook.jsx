import React from "react";

// useCallback ka use isliye kiya jata hai taaki function ko unnecessary re-renders se bachaya ja sake, khaaskar jab function ko child component mein props ke taur par pass kiya jata hai. Yeh ensure karta hai ke function tabhi re-create ho jab dependencies change hon, isse performance improve hoti hai aur extra function re-renders avoid hote hain.

function UseCallBack_Hook() {
  return <div>UseCallBack_Hook</div>;
}

export default UseCallBack_Hook;
