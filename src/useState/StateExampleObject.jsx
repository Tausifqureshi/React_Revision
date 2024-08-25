import React, { useState } from "react";

function StateExampleObject() {
  const [perosn, setPerson] = useState({
    id: 1,
    firstName: "Tausif",
    lastName: "Quraishi",
    email: "Tausifquraishi2gmailcom",
    phone: 9323421812,
    age: 24,
  });

  function increaseAge() {
    console.log("increaseAge");
    setPerson({ ...perosn, age: perosn.age + 1 });
  }
  return (
    <>
      <p> FirstName : {perosn.firstName} </p>
      <p> lastName : {perosn.lastName} </p>
      <p> email : {perosn.email} </p>
      <p> phone : {perosn.phone} </p>
      <p> age : {perosn.age} </p>

      <button onClick={increaseAge}>Increase-Age</button>
    </>
  );
}

export default StateExampleObject;
