import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
//To enable bootstrap navbar dropdown
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//step2 :-We will create pages which we want to show ex:- home,
//contact,service,about etc..
/*step 3:-a.we need Switch and Route components from react-router-dom.
To render routes,we use Route compnent and Route have  properties like 
path ,render,component*/
const App = () => {
  return (
    <>
      <Navbar />
      {/* Switch to show one route at one time */}
      <Switch>
        {/* path: the path of the route.and component:component or content to render os show */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
