// react form hook
// validtion --> yap library

//  z-stand --->  library
// react query ---> data fetching library









// multiple radio button example
import React, { useState, useEffect } from "react";

function Z() {
//   const [selectedOption, setSelectedOption] = useState(""); // initially koi select nahi
const [selectedOption, setSelectedOption] = useState(() => {
  return localStorage.getItem("selectedOption") || "";
});


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

//   Save data in local storage
  useEffect(() => {
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <label>
        <input
          type="radio"
          name="fruit"
          value="apple"
          checked={selectedOption === "apple"}
          onChange={handleChange}
        />
        Apple
      </label>

      <label>
        <input
          type="radio"
          name="fruit"
          value="banana"
          checked={selectedOption === "banana"}
          onChange={handleChange}
        />
        Banana
      </label>

      <label>
        <input
          type="radio"
          name="fruit"
          value="mango"
          checked={selectedOption === "mango"}
          onChange={handleChange}
        />
        Mango
      </label>

      <p>Selected fruit: {selectedOption}</p>
    </div>
  );
}

export default Z;


