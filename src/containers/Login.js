import React, { Component } from "react";
import {  Form, FormGroup, Label, Input } from "reactstrap";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";
import { Auth } from "aws-amplify";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup >
            <Label for="email">Email</Label>
            <Input
              autoFocus
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup >
            <Label for="password">Password</Label>
            <Input
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
            <LoaderButton
              block
              disabled={!this.validateForm()}
              type="submit"
              text="Login"
              loading={this.state.loading}
              loadingText="Logging in…"
              />
        </Form>
      </div>
    );
  }
}
