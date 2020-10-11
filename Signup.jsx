import React from "react";
import './index.css';
import { NavLink } from 'react-router-dom';
import { render } from "@testing-library/react";
function Signup ()  {
   
    
        return (
            <>
           {/* <form class="col-lg-6 offset-lg-3" > */}
           <form class="col-lg-6 offset-lg-3">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                <label> </label>

                </div>


                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
                <p className="forgot-password text-right">
                    Already registered 

                    <NavLink className="nav-link" to="/login">SignIn</NavLink>
                </p>
            </form>
            </>
        );
        };


export default Signup;