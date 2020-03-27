import React, { useState, useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import InputCom from "./components/inputComponent";
//import { order1, order2, order3 } from "./mokData";
import TaxCalculator from "./components/taxCalculator";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  const updateOrders = array => {
    setOrders(orders.concat([array]));
  };

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  const order = orders
    ? orders.map(order => (
        <TaxCalculator key={parseInt(order.id)} order={order} />
      ))
    : "No Orders";

  return (
    <div className="App">
      <InputCom updateOrders={updateOrders} />
      <CardDeck className="cardGroup">{order}</CardDeck>
    </div>
  );
}

export default App;
