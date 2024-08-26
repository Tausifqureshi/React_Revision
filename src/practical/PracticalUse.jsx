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

  return (
    <>
      <Users userDetaisl={users} />
      {/* pura ke pura users hi pass kar diye is ko Users-file me ham props ya destucturing kar ke data nikale ge */}
    </>
  );
}

export default PracticalUse;
