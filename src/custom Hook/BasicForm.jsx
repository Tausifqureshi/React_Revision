import React from 'react';
import useLocalStorage from './useLocalStorage';

function BasicForm() {
  const [firstName, setFirstName] = useLocalStorage('firstName', '');

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${firstName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
