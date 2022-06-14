import React from 'react';
import LoginPic from '../assets/LoginPic.jpg';
import '../Styles/Login.css';
import Navbar from '../components/Navbar';
import styled from 'styled-components'


function Login() {
  const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:row;
  `

  return (
    
    <div className="body">
      <Navbar/>
      <Div>
        <div className="signupform">
          <form >
          <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              
            />
          </div>
          <div className="username">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
             
            />
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
          
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
             
            />
          </div>
          <div>
            <button className="submit" >
              Sign Up
            </button>
          </div>

          </form>

        </div>
      </Div>
      
      
    </div>
  );
}

export default Login;