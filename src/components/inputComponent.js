import React, { useState, useEffect } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

export default function InputComponent(props) {
  const [item, setItem] = useState({
    id: 0,
    quantity: 0,
    type: "",
    name: "",
    price: 0,
    imported: ""
  });
  const [orderItems, setorderItems] = useState([]);
s
  const onSubmitOrder = () => {
    props.updateOrders(orderItems);
    setorderItems([]);
  };

  const submitItem = e => {
    e.preventDefault();
    setorderItems(orderItems.concat(item));

    setItem({
      id: 0,
      quantity: 0,
      type: "",
      name: "",
      price: 0,
      imported: ""
    });
  };

  const onInputHAndler = e => {
    e.preventDefault();

    setItem({ ...item, [e.target.name]: e.target.value });
  };
  // useEffect(() => {
  //   // console.log("item single object");
  //   // console.log(item);
  //   console.log("item array of object");
  //   console.log(orderItems);
  // }, [item, orderItems]);

  return (
    <Card style={{ width: 80 + "%", margin: "auto", marginTop: 30 + "px" }}>
      <Form onSubmit={submitItem}>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Name of the Item
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={onInputHAndler}
              value={item.name}
              name="name"
              type="text"
              placeholder="Name of the item to be added"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Number of items
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={item.quantity}
              onChange={onInputHAndler}
              type="number"
              name="quantity"
              placeholder="Quantity of items"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Price per unit
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={item.price}
              onChange={onInputHAndler}
              type="number"
              name="price"
              placeholder="Price of the item to be in USD  ($)"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Item number
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={item.id}
              onChange={onInputHAndler}
              type="number"
              name="id"
              placeholder="Price of the item to be in USD  ($)"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Type of the item
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={item.type}
              onChange={onInputHAndler}
              type="text"
              name="type"
              placeholder="for tax purpose (book, food, medicine or other)"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Is imported
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={item.imported}
              onChange={onInputHAndler}
              type="text"
              name="imported"
              placeholder="type imported if the item is imported"
            />
          </Col>
        </Form.Group>
      </Form>
      <Button type="submit" onClick={submitItem} variant="secondary">
        Submit Item
      </Button>
      <Button
        style={{ marginTop: 20 + "px" }}
        type="submit"
        onClick={onSubmitOrder}
        variant="danger"
      >
        Submit Oreder
      </Button>
    </Card>
  );
}
