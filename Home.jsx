
import axios from "axios";
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
//import { NavLink } from 'react-router-dom';
{/* <NavLink className="nav-link" to="/login">Login</NavLink> */}

const Home = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
// console.log("Balram");
loadusers();
},[]);

//need to give dependency hece give 0 in array for useEffect
const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadusers();
  };

  return (
    <>
    
      <table class="table border shadow">
<thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">StaffType</th>
    </tr>
    </thead>
    <tbody>
  { users.map((user,index) =>(
    <tr>
      <td>{index+1}</td>   
      <td> {user.name}</td>   
      <td>{user.email}</td>    
       <td> {user.stafftype}</td>  
       <td>
      <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
      <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
      <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
      

       </td>
    </tr>   

  ))};
</tbody>
</table>
</>
  );
};
export default Home;
