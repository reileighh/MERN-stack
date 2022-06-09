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
    let databody={
      "fullname":values.fullname,
      "username":values.username,
      "email":values.email,
      "password":values.password,
    }
    console.log(databody);
    fetch('/Signup',{
       method:'POST',
       body:JSON.stringify(databody),
       headers:{
          'Content-type': 'application/json'
       },
    })
    .then(res=>res.JSON())
   .then(data=>console.log(data))
   .catch(error=>console.log('ERROR'));
  };
  // After submitting form, we use validation to retrieve the error object and use setErrors to set the error
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors, dataIsCorrect, submitForm]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error"> {errors.fullname} </p>}
          </div>
          <div className="username">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error"> {errors.username} </p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error"> {errors.email} </p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error"> {errors.password} </p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
