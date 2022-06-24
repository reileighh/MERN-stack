import React, { useState } from 'react';
import '../Styles/Login.css';
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import axios from 'axios';


function Login() {
  // const Div = styled.div`
  //   display:flex;
  //   align-items:center;
  //   justify-content:flex-start;
  //   flex-direction:row;
  // `

  const [posts, setPosts] = useState([]);

  const [values, setValues] = useState({
    username:"",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    axios.get('/Login')
    .then(response=>{
      console.log(response.data);
      setPosts(response.data);
      console.log("data retrieval done");
    })
    .catch(error=>console.log('ERROR'));
  };

 
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    
    <div className="body">
      <Navbar/>
     
          <form className="signupform">
            <h1 style={{justifyContent:"center",marginTop:'0px'}}>Login to your account</h1>
            <hr
            style={{
              marginTop: '0px',
              backgroundColor:"white"
            }}
            />
         
            <input
            style={{marginTop:"20px"}}
              className="inputLogin"
              type="text"
              name="username"
              placeholder="Username"
                onChange={handleChange}
                value={values.username}
            />
      
            <input
              style={{marginTop:"20px"}}
              className="inputLogin"
              type="password"
              name="password"
              placeholder="Password"
               onChange={handleChange}
                value={values.password}
            />
        

          <div style={{marginTop:"15px"}}>
            <a href="/forgot" style={{color:"white", textDecoration:"none"}}>Forgot Password?</a>
          </div>


            <button style={{marginTop:"20px", marginBottom:"10px"}} 
            className="but" onClick={handleLogin} >
              Log In
            </button>
          

          </form>

      
      
      
      
    </div>
  );
}

export default Login;