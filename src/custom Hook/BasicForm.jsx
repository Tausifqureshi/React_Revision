import useLocalStorage from "./useLocalStorage";
import styles from "./BasicForm.module.css";

function BasicForm() {
  
    // first time user aye ga empty '' mile ga local storage. lekin kuch add kar re ge add hoga lekin is me add kar re ge jayge ga usename wale key me q ke new user ake apni value add kar sake.
  const [firstName, setFirstName] = useLocalStorage ("User", ""); //USElocalstorage function hamne parameter pass kiye na key initail vlue us ko hi ham parameter me dere key User, initalValue "",. jo ham firstname and setFirtname uselocslstorage se dectcuturing kar re hai matlab useState-hook us ke ander hai is liye ham us ko  dectcuturing ke nikal re hai.

  //Ek ke baad ek value aye gi.
  const [names, setNames] = useLocalStorage("UserNames", []); //same upper wale ki tara is k bhi useState localStorage me defiend useLocalStorage ke function se parameter and argumnet se lere hai username firast key hsi initail value empty [] is me. is function ka use hai setName ka ek ke baad ek value add kar re gi.



   // input ko cantroll bana ke liye ye function use.
  const handleInput = (e) => {
    setFirstName(e.target.value)
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // const trimmedName = firstName.trim();
    const trimmedName = firstName.trim();
    if (trimmedName.length === 0) {
      alert("Please enter a valid name.");
      return;
    }
    //  setNames((prevNames) => [...prevNames, trimmedName]); aisa bhi kar sakte hai.

     setNames([...names, trimmedName]);  //username key me purani value rehe gi ...names sparade oparetor se  trimmedName is ko jo upper trim() kar re ge jo bhi value user dega is me a jaye gi jo bhi use add kar re ga.
     alert("Submit Data")
     setFirstName('')

  };
 
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Submitted Names:</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BasicForm;
