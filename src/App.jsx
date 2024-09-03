import React from "react";
import PropsChap from "./props-file/PropsChap";
import UserList from "./render-list/UserList";
import EventChapter from "./eventChapter/EventChapter";
import UseStateChap from "./useState/UseStateChap";
import PreviousState from "./useState/PreviousState";
import StateExampleArray from "./useState/StateExampleArray";
import StateExampleObject from "./useState/StateExampleObject";
import MultiStateComponent from "./useState/MultiStateComponent";
import PracticalUse from "./practical/PracticalUse";
import ControlledComponent from "./controll vs uncontroll/ControlledComponent";
import Dymi from "./practical/Dymi";
import Form from "./form/Form";
import StyleComponents from "./style-Rules/StyleComponents";
import RadioButton from "./form/RadioButton";
import MultiInputForm from "./form/MultiInputForm";

export default function App() {
  const lastName = (name) => name.toUpperCase(); //function ko bhi render kar sakte hai JSX me niche.
  let firstName = "Tausif";
  return (
    <>
      {/* <h1 className="container dymy"> Hello {firstName} </h1>
      <h1> Hello {lastName("Quraishi")} </h1> */}

      {/* Evnet-componet-file */}
      {/* <EventChapter /> */}

      {/* Porps-componet-file */}
      {/* <PropsChap /> */}

      {/*useState-component-file start  */}
      {/* <UseStateChap /> */}
      {/* <PreviousState /> */}
      {/* <StateExampleArray /> */}
      {/* <StateExampleObject /> */}
      <MultiStateComponent />
      {/*useState-component-file end  */}

      {/* Render-list componet file */}
      {/* <UserList /> */}

      {/* Form-File */}
      {/* <Form /> */}
      {/* <RadioButton /> */}
      {/* <MultiInputForm /> */}

      {/* Practical-File */}
      {/* <PracticalUse /> */}
      {/* <Dymi /> */}

      {/* <ControlledComponent /> */}


      {/* Style Components */}
      {/* <StyleComponents /> */}
    </>
  );
}
