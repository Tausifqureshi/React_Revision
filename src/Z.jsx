// react form hook
// validtion --> yap library

//  z-stand --->  library
// react query ---> data fetching library




import React, { useState, useEffect } from "react";

function Z() {
  const defaultValues = {
    html: false,
    css: false,
    js: false,
   
  };

  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem("checkedItems");
    return saved ? JSON.parse(saved) : defaultValues;
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  return (
    <div>
      <h2>🔘 Object Based</h2>

      <label>
        <input
          type="checkbox"
          name="html"
          checked={checkedItems.html}
          onChange={handleChange}
        />
        HTML
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="css"
          checked={checkedItems.css}
          onChange={handleChange}
        />
        CSS
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="js"
          checked={checkedItems.js}
          onChange={handleChange}
        />
        JavaScript
      </label>


      <p>Selected Items: {Object.keys(checkedItems).map((item) => item.toUpperCase()).join(", ")} </p>
    </div>
  );
}

export default Z


