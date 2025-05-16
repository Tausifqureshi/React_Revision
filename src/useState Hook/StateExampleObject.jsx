import React, { useState } from "react";

function StateExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Tausif",
    lastName: "Quraishi",
    email: "Tausifquraishi2gmailcom",
    phone: 9323421812,
    age: 24,
  });

  function increaseAge() {  
    console.log("increaseAge");
    // setPerson({ ...person, age: person.age + 1 });  //...old value bhi rehe gi is spreade oparetor se.

    // setPerson((previousState) => { //previousState ek callBcak function lera hai.
    //   return { ...previousState, 
    //     age: previousState.age + 1,
    //     phone: 9688000 //multiple value ko bhi update kar sakte hai
    //    };
    // });

    setPerson(
    {
      ...person,
      firstName: "Neaha Quraishi",
    age: person.age + 1,
    phone: 9688000,
    id: 2,  
  } //multiple value ko bhi update kar sakte hai
    )
  }
  
  return (
    <>
      <p>id : {person.id}</p>
      <p> FirstName : {person.firstName} </p>
      <p> LastName : {person.lastName} </p>
      <p> Email : {person.email} </p>
      <p> Phone : {person.phone} </p>
      <p> Age : {person.age} </p>

      <button onClick={increaseAge}>Increase-Age</button>
    </>
  );
}

export default StateExampleObject;
