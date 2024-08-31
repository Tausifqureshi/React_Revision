// import React, { useState } from "react";

// // useState me Array bhi store kare sakte hai referance type data.

// function StateExampleArray() {
//   const [fruits, setFruit] = useState(["Apple", "Mango", "Banana"]);

//   function fruitsAdding() {  
//     console.log("Add new Fruits");
//     // setFruit([...fruits, "Add new fruits"]); //...old value bhi rehe gi is spreade oparetor se or new value ko add kar re hai "new value".

//     // setFruit([...PreviousState => {
//     //    PreviousState ,"Add new fruits"
//     // }]);

//     setFruit((previousState)=>{ //previousState ek callBcak function lera hai.
//       return [...previousState, "Add new fruits"]
//     })
//   }
//   return (
//     <>
//       <ul> 
//         {fruits.map((fruit, index) => {
//           //'index' ko unique key ke liye use kar rahe hain duplicate value ati bhi hai tu error nhi aye ga ab console me.
//           return <li key={index}>{fruit}</li>;
//         })}
//       </ul>
//       <button onClick={fruitsAdding}>Add-Fruits</button>
//     </>
//   );
// }

// export default StateExampleArray;





// Real case Example hai ye.
import React , {useState} from 'react'

function StateExampleArray() {
  // Initial state: array of user objects
   const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Eoin Morgan', age: 27 }
  ]);

  // Function to update a user's age
  const updateAge = (id, newAge) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, age: newAge } : user
    );
    setUsers(updatedUsers); // Update the array with modified user
  };

  // Function to remove a user
  const removeUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    console.log(filteredUsers)
    setUsers(filteredUsers); // Remove the user from the array
  };
  return (
    <>
       <h2>User List</h2>
      <ul>  
        {users.map(user => ( 
          <li key={user.id}>
            {user.name} - Age: {user.age}
            <button onClick={() => updateAge(user.id, user.age + 1)}>Increase Age</button>
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    


    </>
  )
}

export default StateExampleArray