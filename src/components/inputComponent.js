import React, { useState, useEffect } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

import "./inputComponent.css";

export default function InputComponent(props) {
  const [item, setItem] = useState({
    id: 0,
    quantity: 0,
    type: "other",
    name: "",
    price: 0,
    imported: false
  });
  const [orderItems, setorderItems] = useState([]);

  const typeHandler = e => {
    setItem({ ...item, type: e.target.value });
  };

  const importedHandler = () => {
    setItem({ ...item, imported: !item.imported });
  };

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
      type: "other",
      name: "",
      price: 0,
      imported: false
    });
  };

  const onInputHAndler = e => {
    e.preventDefault();

    setItem({ ...item, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("item single object");
    console.log(item);
    // console.log("item array of object");
    // console.log(orderItems);
  }, [item, orderItems]);

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
            Is imported
          </Form.Label>
          <Row sm="10">
            <Form.Check
              type="checkbox"
              label="book"
              className="checkBox"
              value="book"
              checked={item.type === "book"}
              onChange={typeHandler}
            />
            <Form.Check
              type="checkbox"
              label="food"
              className="checkBox"
              value="food"
              checked={item.type === "food"}
              onChange={typeHandler}
            />
            <Form.Check
              type="checkbox"
              label="medicene"
              className="checkBox"
              value="medicene"
              checked={item.type === "medicene"}
              onChange={typeHandler}
            />
            <Form.Check
              type="checkbox"
              label="other"
              className="checkBox"
              value="other"
              checked={item.type === "other"}
              onChange={typeHandler}
            />
          </Row>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintext">
          <Form.Label column sm="2">
            Is imported
          </Form.Label>
          <Row sm="10">
            <Form.Check
              className="checkBox"
              type={"radio"}
              id={`default-radio`}
              label={`Imported`}
              checked={item.imported}
              onChange={importedHandler}
            />
            <Form.Check
              className="checkBox"
              type={"radio"}
              id={`default-radio`}
              label={`Domestic`}
              checked={!item.imported}
              onChange={importedHandler}
            />
          </Row>
        </Form.Group>
      </Form>
      <Button
        type="submit"
        onClick={submitItem}
        variant="secondary"
        className="button__custom"
      >
        Submit Item
      </Button>
      <Button
        className="button__custom"
        type="submit"
        onClick={onSubmitOrder}
        variant="danger"
      >
        Submit Order
      </Button>
    </Card>
  );
}
