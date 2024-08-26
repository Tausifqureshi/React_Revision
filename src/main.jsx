import React from "react";
import ReactDOM from "react-dom/client";
import PropsChap from "./props-file/PropsChap";
import UserList from "./render-list/UserList";
import EventChapter from "./eventChapter/EventChapter";
import UseStateChap from "./useState/UseStateChap";
import PreviousState from "./useState/PreviousState";
import StateExampleArray from "./useState/StateExampleArray";
import StateExampleObject from "./useState/StateExampleObject";
import MultiStateComponent from "./useState/MultiStateComponent";
import Form from "./form/Form";
import PracticalUse from "./practical/PracticalUse";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    {/* Evnet-componet-file */}
    {/* <EventChapter /> */}

    {/* Porps-componet-file */}
    {/* <PropsChap /> */}

    {/*useState-component-file start  */}
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
                         
    {/* Practical-File */}
    {/* <PracticalUse /> */}
  </>

  // </React.StrictMode> //duble suggestion ata hai is se console pe.
);
