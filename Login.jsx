import React from "react";
import './index.css';
import { NavLink } from 'react-router-dom';
function Login ()  {
    
        return (
         <>
            <form class="col-lg-6 offset-lg-3">
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
            <NavLink className="nav-link" to="/signup">Create account</NavLink>
                </p>
             
               
            </form>

            
    
            </>
        );
        };


export default Login;