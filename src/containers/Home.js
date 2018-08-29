// @flow
import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";
import Login from "./Login";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  renderLander() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Cave Painter Productions</h1>
          <p>From Order to Doorder.</p>
        </div>
      </div>
    );
  }

  renderLogin() {
    return <Login />
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderLander() : this.renderLogin()}
      </div>
    );
  }
}
