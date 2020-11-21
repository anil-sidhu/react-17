import './App.css';
import React from 'react'
import {Button,Badge,Card} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Install Bootstrap</h1>
      <h1>
    Example heading <Badge variant="light">New</Badge>
  </h1>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
