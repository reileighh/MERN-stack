import React from 'react';
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
            <h1 style={{justifyContent:"center"}}>Login to your account</h1>
            <hr
            style={{
              marginTop: '0px',
              backgroundColor:"white"
            }}
            />
         
          <div style={{marginTop:"20px"}}>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
             
            />
          </div>
      
          <div style={{marginTop:"20px"}}>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div style={{marginTop:"15px"}}>
            <a href="/forgot" style={{color:"white", textDecoration:"none"}}>Forgot Password?</a>

          </div>


          <div style={{marginTop:"20px"}}>
            <button className="but" >
              Log In
            </button>
          </div>

          </form>

        </div>
      </Div>
      
      
    </div>
  );
}

export default Login;