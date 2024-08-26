import React from "react";
// Destructuring the userDetails object.
function User({ id, name, age }) {
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
      </div>
    </>
  );
}

export default User;
