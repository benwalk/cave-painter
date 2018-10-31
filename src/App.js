import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import React, { Component } from 'react';
import Routes from "./Routes";
import "./App.css";
import { Auth } from "aws-amplify";
import BrandLogo from './components/BrandLogo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
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
      <div className="App">
        <Navbar light className="bg-light" fixed="top" expand="lg">
          <NavbarBrand href="/">
            <BrandLogo />
            Cave Painter Productions
          </NavbarBrand>
          <Collapse navbar>
        {
          this.state.isAuthenticated ?
          <Nav navbar>
            <NavItem><NavLink href="/orders" active>Orders</NavLink></NavItem>
            <NavItem><NavLink href="/roasts">Roasts</NavLink></NavItem>
            <NavItem><NavLink href="/coffee">Coffee</NavLink></NavItem>
            <NavItem onClick={this.handleLogout}><NavLink href="/logout">Logout</NavLink></NavItem>
          </Nav>
        :
          <Nav>
            <NavItem><NavLink href="/login">Login</NavLink></NavItem>
          </Nav>
        }
</Collapse>
        </Navbar>

        <Container fluid>
          <Row>
            <Col sm={9} md={12}>
              <Routes childProps={childProps} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
