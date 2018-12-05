import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
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
      isAuthenticating: true,
      dropdownOpen: false
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

  toggle() {
    this.setState = {
      dropdownOpen: !this.state.dropdownOpen
    }
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
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Orders
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/orders">
                    Dashboard
                  </DropdownItem>
                  <DropdownItem href="/orders/new">
                    New Order
                  </DropdownItem>
                  <DropdownItem href="/orders/fulfilled">
                    Fulfilled
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Roasts
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/roasts">
                    Dashboard
                  </DropdownItem>
                  <DropdownItem href="/roasts/new">
                    New Roast
                  </DropdownItem>
                  <DropdownItem href="/roasts/notes/new">
                    Add Cupping Notes
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Coffee
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/coffee">
                      Overview
                    </DropdownItem>
                    <DropdownItem href="/coffee/new">
                      Add Inventory
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
