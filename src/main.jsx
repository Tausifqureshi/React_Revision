import React from 'react'
import ReactDOM from 'react-dom/client';
import PropsChap from './props-file/PropsChap';
import UserList from './render-list/UserList';
import EventChapter from './eventChapter/EventChapter';
import UseStateChap from './useState/UseStateChap';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  {/* <EventChapter /> */}
  {/* <PropsChap /> */}

  <UseStateChap />



   {/* <UserList /> */}
   {/* Render-list componet file use */}
  </React.StrictMode>
)
