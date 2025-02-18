import React, { useMemo, useState } from "react";
import DispalyeFruits from "./DispalyeFruits";

// Harshit ka Example karwaya hua.
function Fruits() {

 console.log("Fruit Compoennts Called");
  const [userName, setUserName] = useState("");

  const fruit = useMemo(()=>{ // "fruits" bar-bar re-render ho raha hai kyunki ye ek reference type hai, jo parent state change par naya memory reference banata hai; ise rokne ke liye `useMemo` ka use karein.
   return [
        { firstName: "apple", emoji: "🍎" },
        { firstName: "banan", emoji: "🍌" },
        { firstName: "mango", emoji: "🥭" },
      ];
   }, [])


  return (
    <div>
    <div style={{width: "200px" ,margin : "2rem"}}>
    <label htmlFor="username"> UserName </label>
      <input
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={(e) => {setUserName(e.target.value)}}
      />
    </div>
      
        <DispalyeFruits  fruit={fruit}/>
    </div>
  );
}

export default Fruits;
