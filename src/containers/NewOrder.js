import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardColumns } from "reactstrap";
// import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewOrder.css";

export default class NewOrder extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: ""
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div>
        <Container>
          <h2>Enter New Order</h2>
          <Form tag="fieldset">
            {/* reactstrap way to do this */}
            <h5 for="existingCustomer">Choose existing customer</h5>
            <FormGroup>
              <Input type="select" id="existingCustomer" name="existingCustomer">
                <option>Taylor</option>
                <option>Dan</option>
                <option>Dirk</option>
              </Input>
            </FormGroup>

            <h5> Or, fill out new customer information</h5>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" placeholder="email@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="address">Shipping Address</Label>
              <Input type="text" id="address-street" name="address" placeholder="street" />
              <Input type="text" id="address-city" name="address" placeholder="city" />
              <Input type="text" id="address-state" name="address" placeholder="state" />
              <Input type="text" id="address-zip" name="address" placeholder="zip" />
            </FormGroup>

            <h5>Add items</h5>
            <FormGroup>
              <Label for="product">Coffee</Label>
              <Input type="select" id="product" name="product">
                <option>Washed Colombian Coffee</option>
                <option>Washed Ethiopian Coffee</option>
                <option>Washed Guatemalan Coffee</option>
              </Input>
              <Label for="product-amount">Amount</Label>
              <Input type="select" id="product-amount" name="product-amount">
                <option>200g</option>
                <option>400g</option>
                <option>1000g</option>
              </Input>
              <Label for="product-frequency">Amount</Label>
              <Input type="select" id="product-amount" name="product-amount">
                <option>Once</option>
                <option>Every Week</option>
                <option>Every Two Weeks</option>
                <option>Every Month</option>
              </Input>
              <Button>Add</Button>
            </FormGroup>

            <h5>Order Summary</h5>
            <ListGroup>
              <ListGroupItem>
                <p>Washed Guatemalan Coffee - 400g</p>
                <small>Once</small>
                <Button color="danger" className="float-right">Remove</Button>
              </ListGroupItem>
              <ListGroupItem><p>Washed Columbian Coffee - 200g</p><small>Every Two Weeks</small><Button color="danger" className="float-right">Remove</Button></ListGroupItem>
            </ListGroup>


            {/* bootstrap way to do this */}

            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
        </Container>
      </div>
    );
  }
}
