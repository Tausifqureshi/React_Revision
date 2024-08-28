// import React from "react";
// // Destructuring the userDetails object.
// function User({ id, name, age, clickEvent }) {
//   return (
//     <>
//       <div
//         style={{
//           margin: "10px auto",
//           padding: "10px",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           width: "50%",
//           textAlign: "center",
//           backgroundColor: "#292929",
//           color: "#efefef",
//         }}
//       >
//         <p>
//           <strong>User ID:</strong> {id}
//         </p>
//         <p>
//           <strong>First Name:</strong> {name}
//         </p>
//         <p>
//           <strong>Age:</strong> {age}
//         </p>
//         <button
//           onClick={() => {
//             clickEvent(id,  age + 1);
//           }}
//         >
//           Increase Age
//         </button>
//       </div>
//     </>
//   );
// }

// export default User;

import React from "react";

// Destructuring the userDetails object.
function User({ id, name, age, click, removeUser }) {
  return (
    <>
      <div
        style={{
          margin: "10px auto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "50%",
          textAlign: "center",
          backgroundColor: "#292929",
          color: "#efefef",
        }} 
      >
        <p>
          <strong>User ID:</strong> {id}
        </p>
        <p>
          <strong>First Name:</strong> {name}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p> 
        {/* If condition use Practical file me tu is tara se call funcation */}
        <button onClick={() => { click (id);}}> Increase Age </button>


        {/* <button onClick={() => { click (id, age + 1);}}> Increase Age </button> */}
        {/* onClick ye real event hai jo click hai o referance ara hai Users-Fils se jis se ham props se  Destructuring kar re hai ham click event ka naam kuch bhi de sakta hai  */}

        <button onClick={() => removeUser(id)}>Remove</button>
      </div>
    </>
  );
}

export default User;
