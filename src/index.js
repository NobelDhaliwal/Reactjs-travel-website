import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
//step1-Import BroswerRouter from react-router-dom to use routing in our entire app.
/*1. to make navbar we want to use react-router-dom modules.in index.js file we need 
BrowserRouter from react-router-dom .we have to wrap our companents which we want to show .
All components which we want to show are in App.js therefore we wrap app component in
 browserRouter.*/

ReactDOM.render(
  <>
   <BrowserRouter>
  <App/>
  </BrowserRouter>
   </>,
   document.getElementById('root'));

/*2.React comes without routing. 
And to enable it in our project, we need to add a library named react-router-dom
pages which we want to show wrapped in BroswerRouter....*/
