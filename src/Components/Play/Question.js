import React from 'react'
import { Card, Button} from 'react-bootstrap';
import testImage from '../../images/about.JPG';

function Question(props) {
    return (
        <>
         <Card style={{ width: '29rem' }}>
        <Card.Img variant="top" src={testImage} />
          <Card.Body>
            <Card.Title> {props.awayTeam}  vs. {props.homeTeam}  </Card.Title>
              <Card.Subtitle style={{ fontSize: '12px' }}>7:00pm - Penn Hills Dek Rink</Card.Subtitle>
                  <Card.Text>{props.question}</Card.Text>
            <Button id='btn'  variant="primary">Player 1</Button>
            <Button id='btn'  variant="primary">Player 2</Button>
            
        </Card.Body>
      </Card>
      </>



    )
}

export default Question;
