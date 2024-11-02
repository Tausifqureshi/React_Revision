
import React, { useState } from "react";
import styles from "./InputForm.module.css";
 
function InputForm() {
  const [userName, setUserName] = useState("");
  // React me agar kisi specific component me state ki zaroorat hai toh wohi par state create karna best practice hai, kyunki isse React ki performance par positive asar padta hai, agar parent component (jaise ki BasicApp) me state define ki jaye aur jab bhi state change ho (jaise user input karte waqt) toh uske sabhi child components bhi unnecessary re-render hote hain jo performance ko impact kar sakta hai, isliye jahan zaroorat ho wahi par (child components me) state create karna React ki performance ko optimize karne me madad karta hai, aur yeh approach granular control aur targeted re-rendering mein bhi madadgar hoti hai.

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
