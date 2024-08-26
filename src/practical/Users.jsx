import React from "react";
import User from "./User";

function Users({ userDetaisl }) {
  return (
    <>
      {userDetaisl.map((userValue) => {
        {
          /* return (
          <div key={userValue.id}>
            <p> userId: {userValue.id}</p>
            <p> FirstName: {userValue.name}</p>
            <p> userAge: {userValue.age}</p> 
          </div>
        ); */
        }

        return <User key={userValue.id} {...userValue} />;
        {/* sperade oprator use kar ke pura ke pura object hi pass kar sakte User-File me parameter Destructuring kar ke id name age nikal lega  */}
      })}
    </>
  );
}

export default Users;
