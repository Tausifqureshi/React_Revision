import React from "react";
import './styling.css';
function StyleComponents() {
//   const isSansSerif = false;
const isDarkMode = true;
  return (
    <div>
      {/* <h1
        style={{
          background: "green",
          fontFamily: isSansSerif ? "sans-serif": "serif",
          color: "#fff",
        }}
      >
        {" "}
        Style Components{" "}
      </h1> */}

 <h1 className={isDarkMode? "bg-dark": ''}>My name</h1>
    </div>
  );
}

export default StyleComponents;
