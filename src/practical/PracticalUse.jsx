import React, { useState } from "react";
import Users from "./Users";

// Parctical use useState array of object render difrante difrante component data passes.

function PracticalUse() {
  // Initial state: array of user objects
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Eoin Morgan", age: 27 },
  ]);
     
  function updateAge(userId, newAge) {
    // console.log("clicked", userId, newAge);
    // const updatedUsers = users.map((person) => {
    //   return person.id === userId ? { ...person, age: newAge } : person;
    // });
    // setUsers(updatedUsers);  
  
    // Aisa bhi kar sakte hai map ka use age + 1.
    setUsers((previousState)=>{  //previousState ek callBcak function lera hai.
      return previousState.map((person)=>{
        if (person.id === userId) {
          return {...person, age : person.age +1}
        } else{
          return person
        }
      })
    }) 
  } 

  // Decrease age function.
  function decreaseAge(userId) {
    console.log("clicked", userId);

    // Ternary operator use kar ke bhi kar sakte hai.
    // const updatedUsers = users.map((person) => {
    //   return person.id === userId ? { ...person, age: person.age - 1 } : person;
    // });
    // setUsers(updatedUsers); 
    
    const updatedUsers = users.map((person) =>
      person.id === userId
        ? { ...person, age: person.age > 1 ? person.age - 1 : 1 }
        : person
    );
    setUsers(updatedUsers);
    

    
    // Aisa bhi kar sakte hai map ka use age - 1. if condition use kar ke.
    // setUsers((previousState)=>{  //previousState ek callBcak function lera hai.
    //   return previousState.map((person)=>{
    //     if (person.id === userId) {
    //       return {...person, age : person.age -1}
    //     } else{
    //       return person
    //     }
    //   })
    // })


    // setUsers((previousState) => {
    //   return previousState.map((person) => {
    //     if (person.id === userId) {
    //       return {
    //         ...person,
    //         age: person.age > 1 ? person.age - 1 : 1  // Age kabhi 1 se kam nahi hogi
    //       };
    //     } else {
    //       return person;
    //     }
    //   });
    // });


  }

  function removeUser(userId) {
    console.log("userRemove");
    const filteredUsers = users.filter((pers) => pers.id !== userId);
    setUsers(filteredUsers); //Remove the user from the array.
  }   
  
  return (  
    <>   
      <Users userDetaisl={users} onClickEvent={updateAge} onDecreaseEvent={decreaseAge} remove ={removeUser} />
      {/* pura ke pura users hi pass kar diye is ko Users-file me ham props ya destucturing kar ke data nikale ge.
      onclickEvnet pass kar re hai ham props me updateAge function ka referance Users.file me.
      */}
    </>
  );
}
 
export default PracticalUse;
