import React from "react";
import ReactDOM from "react-dom/client";
import PropsChap from "./props-file/PropsChap";
import UserList from "./render-list/UserList";
import EventChapter from "./eventChapter/EventChapter";
import UseStateChap from "./useState/UseStateChap";
import PreviousState from "./useState/PreviousState";
import StateExampleArray from "./useState/StateExampleArray";
import StateExampleObject from "./useState/StateExampleObject";
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
    <StateExampleObject />
    {/*useState-component-file end  */}

    {/* Render-list componet file */}
    {/* <UserList /> */}
  </>

  // </React.StrictMode> //duble suggestion ata hai is se console pe.
);
