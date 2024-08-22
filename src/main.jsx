import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import HelloWorld from './component/HelloWorld';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
<HelloWorld />
  </React.StrictMode>
)
