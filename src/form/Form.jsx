import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  // const inputFeild = (e) => {
  //   console.log("Changes Value", e.target.value);
  //   setName(e.target.value);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit the Form");
    alert("Submit the Form",name);
    setName("")
  }
  return (
    <>
     {/* <h2 className="dymi">todo</h2> */}
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h1>Form: {name}</h1>
        <form action="" onSubmit={handleSubmit} method="GET">
          <label htmlFor="userName">FirstName: </label>
          <input
            type="text"
            name="firstName"
            id="userName"
            value={name}
            // onChange={inputFeild}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
