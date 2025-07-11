import React, { useState } from "react"; 
import PropsChap from "./props-file/PropsChap";
import UserList from "./render-list/UserList";
import EventChapter from "./eventChapter/EventChapter";
import UseStateChap from "./useState Hook/UseStateChap";
import PreviousState from "./useState Hook/PreviousState";
import StateExampleArray from "./useState Hook/StateExampleArray";
import StateExampleObject from "./useState Hook/StateExampleObject";  
import MultiStateComponent from "./useState Hook/MultiStateComponent";
import PracticalUse from "./practical/PracticalUse";
import ControlledComponent from "./controll vs uncontroll/ControlledComponent";
import Dymi from "./practical/Dymi";
import StyleComponents from "./style-Rules/StyleComponents";
import Form from "./form/Form";
import RadioButton from "./form/RadioButton";
import MultiInputForm from "./form/MultiInputForm";
import Checkbos from "./form/Checkbos";
import UseRef from "./useRef Hooks/UseRef";
import UseEffect from "./useEffect Hook/UseEffect";
import UseReducer from "./useReducer-Hook/UseReducer";
import UseContext from "./useContext.jsx/useContext";
import CustomHook from "./custom Hook/CustomHook";
import BasicForm from "./custom Hook/BasicForm";
import ReactRouter from "./React Router DOM v6/ReactRouter";
import NewFeatures from "./React Router New features/NewFeatures";
import Performance from "./React Perfomance and Advance Hook/MemoizeAllConsept";
import Z from "./Z";
import Memoize_React from "./React Perfomance and Advance Hook/MemoizeAllConsept";
import MemoizeAllConsept from "./React Perfomance and Advance Hook/MemoizeAllConsept";
import Redux from "./Redux/Redux";
import ReduxThunk from "./Redux Thunk/ReduxThunk";

export default function App() {
 const[toggle, setToggle] =  useState(true)
  const lastName = (name) => name.toUpperCase(); //function ko bhi render kar sakte hai JSX me niche.
  let firstName = "Tausif";
  
function toggleHandler(){
  setToggle(!toggle)
}
  return (
    <div>
      <h1> React Tutorial</h1>

     <div>
      {/* <h1 className="container dymy"> Hello {firstName} </h1>
      <h1> Hello {lastName("Quraishi")} </h1> */}
    
      {/* Evnet-componet-file */}
      {/* <EventChapter /> */}

      {/* Porps-componet-file */}
      {/* <PropsChap /> */}

      {/*useState Hook-component-file start  */}
      {/* <UseStateChap /> */}
      {/* <PreviousState /> */}
      {/* <StateExampleArray /> */}
      {/* <StateExampleObject /> */}
      {/* <MultiStateComponent /> */}
        

      {/*useState-component-file end  */}

      {/* Render-list componet file */}
      {/* <UserList /> */}

      {/* Form-File */}
      {/* <Form /> */}
      {/* <RadioButton /> */}
      {/* <Checkbos /> */}
      {/* <MultiInputForm /> */}

      {/* Practical-File */}
      {/* <PracticalUse /> */}
      {/* <Dymi /> */}

      {/* <ControlledComponent /> */}

      {/* Style Components */}
      {/* <StyleComponents /> */}

      {/* UseRef Hook */}
      {/* <UseRef /> */}

      {/* UseEffect Hook-File */}
      {/* <UseEffect /> */}

      {/* UseReducer Hook-File */}              
      {/* <UseReducer /> */}

      {/* Context-API and useContext Hook-File */}
      {/* <UseContext /> */}

      {/* Custom-Hook File*/}
      {/* <CustomHook /> */}
      {/* <BasicForm /> */}

      {/* React-Router-File */}
      {/* <ReactRouter /> */}

      {/* React-Router New Features File */}
      {/* <NewFeatures /> */}

      {/* React Performance and Advance Hook and Memoize*/}
      {/* <MemoizeAllConsept/> */}

      {/* Redux File use */}
      {/* <Redux />/ */}

      {/* Redux Thunk File use */}
      {/* <ReduxThunk /> */}

      {/* React Query File use */}
      {/* <ReactQuery /> */}


       <Z />
       {/* {toggle && <Z />} */}
      {/* <button onClick={toggleHandler}> Toggle Componet</button> */}
      
      </div>

        
                
      
    </div>
  );
}
