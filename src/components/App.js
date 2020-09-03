import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header /> {/*Header Components*/}
        </div>
        <Inventory /> {/*Inventory Components*/}
        <Order /> {/*Order Components*/}
      </div>
    );
  }
}

export default App;
