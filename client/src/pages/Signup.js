import React from 'react';
import "../auth/Signup.css";
import Form from "../auth/Form";
import styled from "styled-components";
 

function Signup() {
  const StyledDiv = styled.div`
  margin:0;
  padding:0;
 `;

  return (
    <StyledDiv>
        <Form/>
    </StyledDiv>
  );
}

export default Signup;