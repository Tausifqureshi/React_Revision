import React, { useState } from 'react';

const MultiStateComponent = () => {
  // Multiple state variables
  const [age, setAge] = useState(25);
  const [name, setName] = useState('John');
  const [isMarried, setIsMarried] = useState(false);

  // Function to increase age 
  const increaseAge = () => {
    setAge(prevAge => prevAge + 1);
  };
  
  // Function to update name
  const changeName = (newName) => {
    setName(newName);
  };

  // Function to toggle marriage status
  const toggleMaritalStatus = () => {
    setIsMarried(prevStatus => !prevStatus);
  };

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={increaseAge}>Increase Age</button>

      <h2>Name: {name}</h2>

      {/* no short arrow function this */}
      <button onClick={() => {changeName('Alice')}}>Change Name to Alice</button>

      {/* Both the onClick Short Arrow function line 34 and 35  * /}
      {/* <button onClick={() => changeName('Alice')}>Change Name to Alice</button> */}
      <button onClick={() => changeName('Bob')}>Change Name to Bob</button>

      <h3>Married: {isMarried ? 'Yes' : 'No'}</h3>
      <button onClick={toggleMaritalStatus}>
        {isMarried ? 'Unmark as Married' : 'Mark as Married'}
      </button>
    </div>
  );
};

export default MultiStateComponent;
