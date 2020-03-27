import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import taxModule from "../logicalComponents/taxModule";
import TotalCard from "../uiComponents/totalCard";
import "./taxCalculator.css";
import {
  sumCalculator,
  totalPriceCalculator
} from "../logicalComponents/calculator";


function TaxCalculator(props) {
  const [taxTotal, setTaxTotal] = useState(0);
  const [orderTotal, setOrderTaxTotal] = useState(0);
  const calculatedTax = taxModule(props.order);

  useEffect(() => {
    setTaxTotal(calculatedTax);
  }, [calculatedTax]);

  useEffect(() => {
    setOrderTaxTotal(
      sumCalculator(totalPriceCalculator(props.order), calculatedTax)
    );
  }, [calculatedTax, props.order]);
  return (
    <Card className="card">
      {props.order.map(ord => {
        return <TotalCard key={parseInt(ord.id)} ord={ord} />;
      })}
      <div className="blockquote mb-0 card-body">
        <Card.Title>
          {" "}
          <h3>Tax: {taxTotal}$</h3>
        </Card.Title>
        <footer className="blockquote-footer">
          <Card.Footer>
            <h3>Order Toatal: {orderTotal.toFixed(2)}$</h3>
          </Card.Footer>
        </footer>
      </div>
    </Card>
  );
}

export default TaxCalculator;
