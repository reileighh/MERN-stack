import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import '../Styles/Review.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Card from 'react-bootstrap/Card'

const Div = styled.div`
margin-top:36px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Div2 = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:row;
background-color:#F7EEEE;
`
const StyledText = styled.p`
color:grey;
font-size:1.5rem;
text-align:left;
`

const StyledButton = styled.button`
border-radius:20px;
padding:6px 36px;
margin-left:8px;
`

const Review = () => {
  return (
    <div>
      <Navbar/>
      <Div>
        <h1>CUSTOMER REVIEWS</h1>
        <StyledText>We've had the pleasure of creating unforgettable travel experiences for tens of <br/>
         thousands of clients from over 80 countries, many of whom were recommended to us <br/>
         by friends and family.
        </StyledText>
      </Div>
      <Div2>
        <Dropdown className="dropdown-button">
            <Dropdown.Toggle className="dropdown" id="dropdown-button" variant="secondary">
            Destination:                       
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>China</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sweden</Dropdown.Item>
            <Dropdown.Item href="#/action-3">New Zealand</Dropdown.Item>
            <Dropdown.Item href="#/action-4">France</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div>
        <StyledButton className="button1">
            <div>
            OLDEST FIRST
            <FontAwesomeIcon icon={faAngleUp} className="icon"/>
            </div>
        </StyledButton>
        <StyledButton className="button2">
            <div>
            NEWEST FIRST
            <FontAwesomeIcon icon={faAngleDown} className="icon"/>
            </div>
        </StyledButton>
        </div>
      </Div2>

      <div className="reviews">
        <h1 className="heading">WHAT PEOPLE ARE SAYING ABOUT US</h1>
        <StyledText>
            We don't like to brag about ourselves, so here are some nice things our travellors had to say.
        </StyledText>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
          <Card style={{ width: '24rem'}} className= 'card-style' role="button" onClick="location.href='/China'" >
        {/* <Card.Link href='/China'> */}
        <Card.Body>
          <Card.Title>China</Card.Title>
          <Card.Text>
            Tours to China are held in a variety of exciting ways - from the dusty deserts of Central 
            Asia to tropical beaches stretching along the Pacific Ocean.
          </Card.Text>
        </Card.Body>
        {/* </Card.Link> */}
      </Card>

            
            
          </Grid>
          <Grid container item spacing={3}>
          <Card style={{ width: '24rem'}} className= 'card-style' role="button" onClick="location.href='/China'" >
        {/* <Card.Link href='/China'> */}
        <Card.Body>
          <Card.Title>China</Card.Title>
          <Card.Text>
            Tours to China are held in a variety of exciting ways - from the dusty deserts of Central 
            Asia to tropical beaches stretching along the Pacific Ocean.
          </Card.Text>
        </Card.Body>
        {/* </Card.Link> */}
      </Card>

            
          </Grid>
          <Grid container item spacing={3}>
          <Card>
            <Card.Body>
              <Card.Title>China</Card.Title>
              <Card.Text>
                Tours to China are held in a variety of exciting ways - from the dusty deserts of Central 
                Asia to tropical beaches stretching along the Pacific Ocean.
              </Card.Text>
            </Card.Body>
          </Card>

            
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Review
