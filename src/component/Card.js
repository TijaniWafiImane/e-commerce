import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Card className="m-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src}/>
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
        <Card.Text>
        {props.prix}
        </Card.Text>
        <Button variant="secondary">Acheter</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;