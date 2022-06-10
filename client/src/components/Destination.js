import React from 'react'
import Card from 'react-bootstrap/Card'
import China from "../assets/China.jpg"
import Sweden from "../assets/Sweden.jpg";
import NewZealand from "../assets/NewZealand.jpg";
import France from "../assets/France.jpg";
import Norway from "../assets/Norway.jpg";
const Destination = () => {
  return (
    <div className="d-flex justify-content-around mt-lg-5">
      <Card style={{ width: '24rem'}} className= 'hover-shadow' >
        <Card.Img variant="top" src={China} />
        <Card.Body>
          <Card.Title>China</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={Sweden}/>
        <Card.Body>
          <Card.Title>Sweden</Card.Title>
          <Card.Text>
            Visit Sweden to experience a mix of elegant towns, peaceful forests and pretty lakes.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={NewZealand} />
        <Card.Body>
          <Card.Title>New Zealand</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={France} />
        <Card.Body>
          <Card.Title>France</Card.Title>
          <Card.Text>
            The city is full of incredible history, architecture, art, charm, and 
            distinct cuisine. Whether you have a day, a week, or a month to explore, Paris is a travel experience
            in its own.
          </Card.Text>
        </Card.Body>
      </Card>  

</div>
  )
}

export default Destination
