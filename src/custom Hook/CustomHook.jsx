import React from 'react'
import useFetch from './useFetch'
function CustomHook() {
 const saveValue = useFetch();
//  console.log(saveValue)
  return (
    <>
    <h1>
    Custom Hook
    </h1>
    
   
    
    </>
  )
}

export default CustomHook