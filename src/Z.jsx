// react form hook
// validtion --> yap library

//  z-stand --->  library
// react query ---> data fetching library




import React, { useState } from 'react'
function Z(){
  const [firstName, setFitstName] = useState("Tausif");
  function changeName(){
    // if (firstName === "Tausif") {
    //   setFitstName("Qureshi")
    // }
    // else {
    //   setFitstName("Tausif")
    // }

    // setFitstName(!firstName)

    setFitstName(firstName === "Tausif" ? "Qureshi" : "Tausif")

  }

  return(
    <>
      <h1> Parctice</h1>
      {/* <h2>{firstName ? "Qureshi" : "Tausif"}</h2> */}
      <h2>{firstName }</h2>

      <button onClick={changeName}>  Change Name</button>
    </>
  )
}
export default Z