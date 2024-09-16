import React from "react";
import useLocalStorage from "./useLocalStorage";
import styles from "./BasicForm.module.css";

function BasicForm() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [names, setNames] = useLocalStorage("names", []);

  const handleInput = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = firstName.trim();
    if (trimmedName.length === 0) {
      alert("Please enter a valid name.");
      return;
    }
    
    setNames((prevState) => [...prevState, trimmedName]);
    setFirstName("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Submitted Names:</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BasicForm;
