//userReducer-Hook ka use ---> is use ham karte hai complex state ko mange karne ke liye.


import React from "react";
import ExampleUseReducer from "./ExampleUseReducer";
import styles from "./useReducer.module.css";

function UseReducer() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.useReducer}>Use Reducer Hook</h2>
      <hr />
      <ExampleUseReducer />
    </div>
  );
}

export default UseReducer;
