import { render } from '@testing-library/react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>
{
return(
<>

<div className="container-fluid nav_bg">
    <div className='row'>
        <div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <a className="navbar-brand" href="#">Hotel Management System</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* //for placing the content on left mr to ml */}


    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span classN="sr-only">(current)</span></NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">Aboutus</NavLink>
      </li>
  
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  
  <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
  </div> 

</nav>

</div>
    </div>
</div>


</>

);

}
export default Navbar;