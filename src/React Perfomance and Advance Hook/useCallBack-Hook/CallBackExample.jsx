import React, { useCallback, useState } from "react";
import Todos from "./Todos";

function CallBackExample() {
  console.log("Parent Components Call");
    const[count, setCount] = useState(0); 
    const[todos, setTodos] = useState([]); 

    function increment(){
         setCount(count + 1);
    }

    let addTodo = useCallback(() => { //useCallBack ek Memoize Function retru karta hai.
        setTodos((prev)=> [...prev, {id : Date.now(), text:"new Todos"}])
    }, []); // Ye function sirf tabhi call hoga jab `Todos` ki value change hogi; kisi aur state ke change par yeh trigger nahi hoga.



  //   function addTodo ()  { // useCallback function ke bina yaha function work nhi kar re ga. Reac.memo ke sath todo comonents ko bhi Memo se wrap karna hoga, useCallBcak and Memo dono use kara hoga. memo componets ko control karne ke liye work karta hai and useCallback Function ke liye use hota hai. 

  // ChatGPT Se Liya Hua Syntex ---> useCallback ke bina function yaha properly work nahi karega. React.memo ke saath Todo component ko bhi memoized karna padega, isliye dono useCallback aur React.memo ka use karna zaroori hai. useCallback function ko memoize karta hai taake unnecessary re-renders na ho, jabki React.memo component ko optimize karta hai, taake performance better ho.


  //     setTodos((prev)=> [...prev, {id : Date.now(), text:"new Todos"}])
  // }; 
  
      // Memoized remove function if you need to optimize further
      const removeTodo = useCallback((removeId) => {
          setTodos((prevTodos) => prevTodos.filter((item) => item.id !== removeId));
      }, [todos]);

  return <>
   <Todos todos={todos} addTodo={addTodo}  removeTodo={ removeTodo}/> <br /><br />
   {/* // addTodo function agar child component me pass karna ho toh useCallback use karna chahiye taake React performance improve ho. is component me hi addTodo Function use tab use Karne ki zarurt nhi hai itni. */}


   <hr />

   <div className="Count-Section">
     <h1> Count: {count } </h1>
     <button type="button" onClick={increment}  style={{ display: "block", margin: "auto", }}> + </button>
   </div>

  </>;
}

export default CallBackExample;
