import React from "react";
import PropsChap from "./props-file/PropsChap";


export default function App() {
  const lastName = (name)=> name.toUpperCase();//function ko bhi render kar sakte hai JSX me 
  let firstName = "Tausif";
  return (
      <React.Fragment>
        <h1 className="container dymy"> Hello {firstName} </h1>
        <h1> Hello {lastName("Quraishi")} </h1>
      <PropsChap />
      </React.Fragment>


  );
}
