import React from "react";


export default function App() {
  const lastName = (name) => name.toUpperCase(); //function ko bhi render kar sakte hai JSX me niche.
  let firstName = "Tausif";
  return (
    <>
      <h1 className="container dymy"> Hello {firstName} </h1>
      <h1> Hello {lastName("Quraishi")} </h1>
    
    </>
  );
}
