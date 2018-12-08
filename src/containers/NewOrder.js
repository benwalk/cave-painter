import React, { Component } from "react";
import { API } from "aws-amplify";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardColumns } from "reactstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewOrder.css";

export default class NewOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      customer: {
        name: "",
        email: "",
        addressStreet: "",
        addressCity: "",
        addressState: "",
        addressZip: "",
      },
      items: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  creatOrder(order) {
    return API.post("orders", "/orders", {
      body: order
    });
  }

  validateForm() {
    return this.state.loading;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    try {
      await this.creatOrder({
        customer: this.state.customer,
        items: this.state.items
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
        <Container>
          <h2>Place Order</h2>
          <Form onSubmit={this.handleSubmit} >
            {/* reactstrap way to do this */}
            <h5>Choose existing customer</h5>
            <FormGroup>
              <Input
                type="select"
                id="existingCustomer"
                name="existingCustomer"
                value={this.state.existingCustomer}
                onChange={this.handleChange}>
                <option>Taylor</option>
                <option>Dan</option>
                <option>Dirk</option>
              </Input>
            </FormGroup>

            <h5> Or, fill out new customer information</h5>
            <Row>
            <Col><FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" id="name" placeholder="first last" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Contact Email</Label>
              <Input type="email" id="email" placeholder="email@example.com" />
            </FormGroup>
            </Col><Col>
            <FormGroup>
              <Label for="address">Shipping Address</Label>
              <Input type="text" id="addressStreet" name="addressStreet" placeholder="street" />
              <Input type="text" id="addressCity" name="addressCity" placeholder="city" />
              <Input type="text" id="addressState" name="addressState" placeholder="state" />
              <Input type="text" id="addressZip" name="addressZip" placeholder="zip" />
            </FormGroup>
            </Col>
            </Row>

            <h5>Add items</h5>
            <Row><Col><FormGroup>
              <Label for="product">Coffee</Label>
              <Input type="select" id="product" name="product">
                <option>Washed Colombian Coffee</option>
                <option>Washed Ethiopian Coffee</option>
                <option>Washed Guatemalan Coffee</option>
              </Input>
              </FormGroup></Col>
              <Col><FormGroup>
              <Label for="product-amount">Amount</Label>
              <Input type="select" id="product-amount" name="product-amount">
                <option>200g</option>
                <option>400g</option>
                <option>1000g</option>
              </Input>
              </FormGroup>
              </Col>
              <Col>
              <FormGroup>
              <Label for="product-frequency">Frequency</Label>
              <Input type="select" id="product-amount" name="product-amount">
                <option>Once</option>
                <option>Every Week</option>
                <option>Every Two Weeks</option>
                <option>Every Month</option>
              </Input>
              </FormGroup></Col><Col className="align-self-center">
                <Button >Add</Button>
              </Col>
            </Row>

            <h5>Order Summary</h5>
            <ListGroup>
              <ListGroupItem>
                <p>Washed Guatemalan Coffee - 400g</p>
                <small>Once</small>
                <Button color="danger" className="float-right">Remove</Button>
              </ListGroupItem>
              <ListGroupItem><p>Washed Columbian Coffee - 200g</p><small>Every Two Weeks</small><Button color="danger" className="float-right">Remove</Button></ListGroupItem>
            </ListGroup>

            <h5 />
            <LoaderButton
              block
              disabled={!this.validateForm()}
              type="submit"
              text="Save"
              loading={this.state.loading}
              loadingText="Placing order…"
              />
        </Form>
        </Container>
    );
  }
}
