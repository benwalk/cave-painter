// @flow
import { Grid, Row, Col, Nav, Navbar, NavItem, Image } from 'react-bootstrap';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";
import { Auth } from "aws-amplify";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">Cave Painter Productions</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          { this.state.isAuthenticated ?
          <Nav>
            <LinkContainer to="/orders">
              <NavItem eventKey="2" title="Item">Orders</NavItem>
            </LinkContainer>
            <LinkContainer to="/roasts">
              <NavItem eventKey="3" title="Item">Roast</NavItem>
            </LinkContainer>
            <NavItem onClick={this.handleLogout}>Logout</NavItem>
          </Nav>
          :
          <Nav>

          </Nav>
          }
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
