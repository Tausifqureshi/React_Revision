
import React, { useState } from "react";
import styles from "./InputForm.module.css";

function InputForm() {
  const [userName, setUserName] = useState("");
  console.log("Input Form Component");

  function inputHandler(e) {
    setUserName(e.target.value);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <label htmlFor="userName" className={styles.label}>Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={inputHandler}
          className={styles.inputField}
        />
      </div>
      {/* <button className={styles.button}>Submit</button> */}
      <button onClick={()=> setUserName("")} className={styles.button}> Clear Input </button>
    </div>
  );
}

export default InputForm;
