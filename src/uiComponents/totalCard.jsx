import React from "react";


import { Card } from "react-bootstrap";

export default function totalCard(props) {
  //console.log(props.ord)
  return (
    <Card.Body>
      <Card.Title>
        <h4>Item number : {props.ord.id}</h4>
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Quantity: {props.ord.quantity}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">
        Order content: {props.ord.name}
      </Card.Subtitle>
      <Card.Subtitle>Price: {props.ord.price}</Card.Subtitle>
      
      
    </Card.Body>
  );
}
