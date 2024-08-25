import React, { useState } from 'react'
import './counter.css'





// Counter Application Create with useState using.
function CounterApp() {
 const [count, setCounter] = useState(0)
  return (
    <>
    <h3>Current count: {count}</h3>
    <div className="container">

    <button onClick={()=>{setCounter((previousState)=> previousState + 1)}}>Increase</button>

    {/* <button onClick={()=>{setCounter(count + 1)}}>Increase</button> */}
    <button  onClick={()=>{setCounter(count - 1)}}>Decrease</button>
    <button  onClick={()=>{setCounter(0)}}>Reset</button>
    </div>
    
  
    </>
  )
}

export default CounterApp