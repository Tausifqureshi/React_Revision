import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const toggleVisibility = () => {
    const input = inputRef.current;
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Toggle me" />
      <button onClick={toggleVisibility}>Toggle Input</button>
    </div>
  );
}



export default UseRef;




