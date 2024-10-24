import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError();
  console.dir(error);
  
  return (
    <div>
     <h1>Please Someting Error Create </h1>
     
    </div>
  )
}

export default Error