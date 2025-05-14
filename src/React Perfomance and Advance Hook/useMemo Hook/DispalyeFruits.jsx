import React, { memo } from "react";

function DispalyeFruits({fruit}) {
    console.log("Dispaly Fruits Components Call");
  return <div style={{width: "200px" ,margin : "2rem"}}>

    <h1>Fruits </h1>
    {fruit.map((fur)=>{
        return <div key={fur.firstName}>
        <span>{fur.emoji}</span>  <span> {fur.firstName} </span>

        </div>
    })}  

  </div>;
}

export default memo ( DispalyeFruits);
