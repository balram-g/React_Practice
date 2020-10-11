import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import  { useState} from "react";

const Adduser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
     // id: "",
      name: "",
      email: "",  
      stafftype: ""
      });
      const { name, email, stafftype } = user;
    
      const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3003/users", user);
      history.push("/");
    };

  return (
    <>
     <form  onSubmit={e => onSubmit(e)} class="col-lg-6 offset-lg-3">
                <h3>Add user</h3>

                {/* <div className="form-group">
                    <label>id</label>
                    <input type="number" className="form-control" placeholder="enter numric id" required
                    name="id"
                    value={id}
                    onChange={e => onInputChange(e)}
                    />
                </div> */}

                <div className="form-group">
                    <label> name</label>
                    <input type="text" className="form-control" placeholder=" name" required name = "name" value={name}
              onChange={e => onInputChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required 
                    name = "email"
                    value={email}
              onChange={e => onInputChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Stafftype</label>
                    <input type="stafftype" className="form-control" placeholder="Enter Stafftype" required name="stafftype" value={stafftype}
              onChange={e => onInputChange(e)}/>
                
                
                </div>
                

                <button className="btn btn-primary btn-block">Add User</button>
                
               
            </form>
    </>
  );
};
export default Adduser;
