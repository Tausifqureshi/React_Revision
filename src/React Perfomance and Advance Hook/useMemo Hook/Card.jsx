import React from "react";

function Card({state1}) {
    console.log("Card Components");
    
  return <div
  style={{
    background: state1 ?"green" : "red",
    width: "200px",
    height: "150px",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
    padding: "1rem",
    marginTop: "1rem",


  }}>

 

  </div>;
}

export default Card;
