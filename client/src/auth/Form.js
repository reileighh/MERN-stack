import React, { useState } from 'react'
import SignupForm from "./SignupForm";
import SignupFormSuccess from "./SignupFormSuccess";
import styled from "styled-components";

const Form = () => {
  const [formIsSubmitted,setFormIsSubmitted] = useState(false);
  const submitForm = () =>{
    setFormIsSubmitted(true);
  }

  const StyledDiv = styled.div`
  margin:0;
  padding:0;
  background:blue;
 `;

  

  return (
    <StyledDiv>
        {!formIsSubmitted?<SignupForm submitForm={submitForm}/>:<SignupFormSuccess/>}
    </StyledDiv>
  )
}

export default Form

/* Here, we have a state formIsSubmitted and is initially initialised to false. However, we have a 
submit form method that updates this formIsSubmitted state. Depending on the state, it will render either 
the form or account created page.*/