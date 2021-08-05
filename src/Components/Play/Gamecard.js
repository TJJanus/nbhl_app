import React from 'react'
import '../Play/card.scss';
import { Card, Button} from 'react-bootstrap';
import testImage from '../../images/about.JPG';

function Gamecard() {
    return (
        
      <Card style={{ width: '29rem' }}>
    <Card.Img variant="top" src={testImage} />
      <Card.Body>
        <Card.Title>Pioneers vs. Imperium</Card.Title>
        <Card.Subtitle style={{ fontSize: '12px' }}>7:00pm - Penn Hills Dek Rink</Card.Subtitle>
          <Card.Text>
      Who is going to score more goals?
          </Card.Text>
            <Button  variant="primary">Player 1</Button>
            <Button  variant="primary">Player 2</Button>
            
        </Card.Body>
      </Card>
            

        
    )
}

export default Gamecard;
