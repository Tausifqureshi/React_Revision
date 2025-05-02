// useEffect ka use API se data fetch karne ya eventListener add karne ke liye bhi useEffect ka use karna padta hai. ya koi sideEffect parform karne ke liye bhi useEffect ka use karte hai.

import React, {useState} from 'react';
import ApiComponent from './ApiComponent';
import CleanUP from './CleanUP';
import PreviousState from '../useState Hook/PreviousState';
import MouseMoveEvent from './MouseMoveEvent';
   
function UseEffect() {
  const[showcomponents,setShowComponents] = useState(true);
  const handleToggle = () => {
    // setShowComponents(!showcomponents ); //true tu false kar re ga ! not oparetor false ko ture ulta work karta hai.
    setShowComponents((PreviousState)=> !PreviousState );  //aisa bhi kar sakte hai.
  };  

  return (
    <div>
    <label htmlFor="showcomponents">Show Components</label>
    <input type="checkbox" name="showcomponents" id="showcomponents" checked={showcomponents} onChange={handleToggle}/>
    {/* <ApiComponent /> */}
   {/* {showcomponents && <CleanUP />} */}
   {/* ShowComponents true hoga tohi cleanup function show hoga warna nhi */}

   {/* {showcomponents &&  <MouseMoveEvent/>} */}
   {/* Same kam ek hi state use kar ke MouseMoveEvent ke sath use */}


   {showcomponents &&   <ApiComponent />}
   {/* Same kam ek hi state use kar ApiComponentke ke sath use */}
  
    </div>
  )
}

export default UseEffect