import React, { useEffect, useState } from "react";
import validation from "./Validation";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    username:"",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
      // postData();
      let databody={
        "fullname":values.fullname,
        "username":values.username,
        "email":values.email,
        "password":values.password,
      }
      fetch('/Signup',{
         method:'POST',
         body:JSON.stringify(databody),
         headers:{
            'Content-type': 'application/json'
         },
      })
     .then(res=>{
        if(res.status===200){
          console.log("SUCCESS in react");
          return res.json();
        } else if(res.status === 409){
          console.log("User already exist in react");
        }
     })
     .then((data)=>{
           console.log(data);
     })
     .catch(error=>console.log('Error posting in react'));
    
    
    
  };

  const postData = () =>{
    let databody={
      "fullname":values.fullname,
      "username":values.username,
      "email":values.email,
      "password":values.password,
    }
    fetch('/Signup',{
       method:'POST',
       body:JSON.stringify(databody),
       headers:{
          'Content-type': 'application/json'
       },
    })
    // .then(res=>res.JSON())
   .then(res=>{
      if(res.status===200){
        console.log("SUCCESS in react");
        return res.json();
      } else if(res.status === 409){
        console.log("User already exist in react");
      }
   })
   .then((data)=>{
         console.log(data);
   })
   .catch(error=>console.log('Error posting in react'));

  }
  /* dataIsCorrect is set to true after we click on the submit button. 
  After submitting form, we use validation to retrieve the error object and use setErrors to set the
  error. After making sure that there is no errors and we have submitted, we will display thea account
  created.*/
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors, dataIsCorrect, submitForm]);

  return (
      <form className="app-wrapper">
        <h2 className="title1">Create Account</h2>
        <h3 style={{color:'grey'}}>Please fill in this form to create an account!</h3>
      
         
      <label className="label">Full Name</label>
      <input
          className="input"
          type="text"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
      />
        {errors.fullname && <p className="error"> {errors.fullname} </p>}
         
          
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error"> {errors.username} </p>}
          
        
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error"> {errors.email} </p>}
  
         
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error"> {errors.password} </p>}

            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
      </form>
  );
};

export default SignupForm;
