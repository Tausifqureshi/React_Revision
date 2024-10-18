import React from "react";

function UsePro({firstName, age} = props) { //Parameter destructuring hai ye.
//   console.log(props); //ek object mile ga return me. 
 //props.age = 23; //props Immutableis ki vlue change nhi kar sakte hai.

// const {firstName, age} = props;// object destructuring.
  return (
    <> 
      {/* <h1>{props.firstName} {props.age}</h1> */}
      {/* props se data access kar re hai ham PropsChap-File se. */}
  
        <h1>Hello {firstName} {age} </h1>
     {/* Object destructuring and paramert destructuring use tu aise access kar re ge value. */}
  
    </>
  );
} 

export default UsePro;
