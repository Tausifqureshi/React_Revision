import React, { useState } from "react";

// useState me Array bhi store kare sakte hai referance type data.

function StateExampleArray() {
  const [fruits, setFruit] = useState(["Apple", "Mango", "Banana"]);

  function fruitsAdding() {
    console.log("Add new Fruits");
    // setFruit([...fruits, "Add new fruits"]); //...old value bhi rehe gi is sprade oparetor se or new value ko add kar re hai "new value".

    // setFruit([...PreviousState => {
    //    PreviousState ,"Add new fruits"
    // }]);

    setFruit((previousState)=>{ //previousState ek callBcak function lera hai.
      return [...previousState, "Add new fruits"]
    })
  }
  return (
    <>
      <ul>
        {fruits.map((fruit, index) => {
          //'index' ko unique key ke liye use kar rahe hain duplicate value ati bhi hai tu error nhi aye ga ab console me.
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <button onClick={fruitsAdding}>Add-Fruits</button>
    </>
  );
}

export default StateExampleArray;
