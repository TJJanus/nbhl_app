import React, {useState} from 'react';
import '../Play/card.scss';
import { Card, Button} from 'react-bootstrap';
import testImage from '../../images/about.JPG';
import Question from './Question';
import data from '../../data';


function Gamecard(props) {

  // const [newData] = useState(data);
  
  // console.log('here is the props', props);
  

  const newData = data;
  console.log(newData);

 

    return (

      <div>
        {newData.map( card => (
          <Question homeTeam={card.homeTeam} awayTeam={card.awayTeam} location={card.location} question={card.question} answerOne={card.answerOne} answerTwo={card.answerTwo}/>
        ))}
      </div>
      // <>
      
        
      // <Card style={{ width: '29rem' }}>
      //   <Card.Img variant="top" src={testImage} />
      //     <Card.Body>
      //       <Card.Title>  vs.  </Card.Title>
      //         <Card.Subtitle style={{ fontSize: '12px' }}>7:00pm - Penn Hills Dek Rink</Card.Subtitle>
      //             <Card.Text>{props.question}</Card.Text>
      //       <Button id='btn'  variant="primary">Player 1</Button>
      //       <Button id='btn'  variant="primary">Player 2</Button>
            
      //   </Card.Body>
      // </Card>
      // </>
      
            

        
    )
}

export default Gamecard;
