// @flow
import { Nav, NavItem, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Nav bsStyle="tabs" activeKey="1">
          <NavItem eventKey="1" href="/home">
            Home
          </NavItem>
          <NavItem eventKey="2" title="Item">
            Orders
          </NavItem>
          <NavItem eventKey="3" >
            Customers
          </NavItem>
          <NavItem eventKey="4" >
            Coffees
          </NavItem>
          <NavItem eventKey="5" >
            Roasts
          </NavItem>
          <NavItem eventKey="6" >
            Packing
          </NavItem>
          <NavItem eventKey="7" >
            Shipping
          </NavItem>
          <NavItem eventKey="8" >
            Inventory
          </NavItem>
          <NavItem eventKey="9" >
            Numbers
          </NavItem>
          <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
        </Nav>
        <Routes />
      </div>
    );
  }
}

export default App;
