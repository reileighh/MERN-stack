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
