import React, {useState} from 'react'

function Dymi() {

  const [counter, setCounter] = useState(0);


  return (
    <>
        <p>Counter Time {counter}</p>
        <button onClick={()=>{setCounter(counter + 1)}}>Increse</button>
        <button onClick={()=>{setCounter(counter - 1)}}>Decrease</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
 
    </>
  )
}

export default Dymi