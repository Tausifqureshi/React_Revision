import React, { useState } from "react";
import styles from "./Dymi.module.css";

function Dymi() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="body">
      <h2 className={styles.dymi}>todo</h2>
      <p>Counter Time {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increse
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Dymi;
