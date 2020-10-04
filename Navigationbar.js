import React from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
//react router dom, react-bootstrap dependency.

class Navigationbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Router>
            <Navbar bg="dark" expand="lg" sticky="top">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>

              <Route
                path="/"
                exact
                render={() => {
                  return <h1>You Choose Home</h1>;
                }}
              ></Route>
              <Route
                path="/projects"
                exact
                render={() => {
                  return <h1>You Choose Projects</h1>;
                }}
              ></Route>
              <Route
                path="/services"
                exact
                render={() => {
                  return <h1>You Choose Services</h1>;
                }}
              ></Route>
              <Route
                path="/contact"
                exact
                render={() => {
                  return <h1>You Choose Contact</h1>;
                }}
              ></Route>
            </Navbar>
          </Router>
        </div>
      </div>
    );
  }
}

export default Navigationbar;
