import React, { Component } from "react";
import "./Home.css";

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
      this.renderLogin();
    }

    try {
      // const notes = await this.notes();
      this.setState({ isAuthenticated: true });
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
    this.props.history.push("/login")
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderLander() : this.renderLogin()}
      </div>
    );
  }
}
