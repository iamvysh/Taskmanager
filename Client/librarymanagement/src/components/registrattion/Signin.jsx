import React, { useState } from "react";
import "./registration.scss";
import "../../styles/components/_button.scss"
const Signin = () => {



  const [state,setState]=useState({
    email:'',
    password:'',
    username:''
  })

  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value,

    })
  }

  return (

    
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">

            <form className="form">
                <h4>Sign In</h4>

            
            <div className="form-group">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter password"
              value={state.password}
              onChange={handleChange}

              
            />
            </div>
            <div className="form-group">
            <button className="button">Sign In</button>
          </div>

            </form>

          
        </div>
      </div>
    </div>
  );
};

export default Signin;
