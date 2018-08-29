// @flow
import { Grid, Row, Col, Nav, NavItem, Image } from 'react-bootstrap';
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
      <Grid>
        <Row>
          <Col xs={4} md={16}>
          <Nav bsStyle="pills" stacked activeKey="1">
            <LinkContainer to="/">
              <NavItem eventKey="1" href="/">Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/orders">
              <NavItem eventKey="2" title="Item">Orders</NavItem>
            </LinkContainer>
            <LinkContainer to="/roasts">
              <NavItem eventKey="2" title="Item">Roast</NavItem>
            </LinkContainer>
            {this.state.isAuthenticated
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : <Fragment>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }
          </Nav>
          </Col>
          <Col xs={6} md={4}>
          <div className="App container">
            <Routes childProps={childProps} />
          </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(App);
