import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './index.css';


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Login from "./Login";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Signup from './Signup';
import Adduser from "./Adduser";
import Edituser from "./Edituser";
import Viewuser from './Viewuser';

const App = () => {
  return (
    <>
    <Navbar/> 

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users/add" component={Adduser} />
        <Route exact path="/users/edit/:id" component={Edituser} />
        <Route exact path="/users/:id" component={Viewuser}/>
        <Redirect to="/"> </Redirect>
      </Switch>
    </>
  );
};
export default App;
