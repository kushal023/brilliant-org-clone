import React from 'react';
import {Container, Row, Col,Card, Button  } from 'react-bootstrap';
import './Header.css';
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";


function Next() {
    return (
            <div>
            <div className="secondpage">
   
   <p className="para1">NEXT STEPS

</p>
   </div>
<Container >
<Row>
<Col xs={6} md={2}>

</Col>
<Col xs={6} md={4}>

<Card className="card">
<Card.Img variant="top" src={img3} />
<Card.Body>

<Card.Text>
NEXT STEPS
</Card.Text>
</Card.Body>
</Card>

</Col>
<Col xs={6} md={4}>

<Card className="card">
<Card.Img variant="top" src={img4} />
<Card.Body>
<Card.Title>Truth-Seeking</Card.Title>
<Card.Text>
Who or what is telling the truth?
</Card.Text>
</Card.Body>
</Card>

</Col>
<Col xs={6} md={2}>

</Col>

</Row>

</Container>
        </div>
    )
}

export default Next
