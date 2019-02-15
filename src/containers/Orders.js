import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem, Progress } from "reactstrap";
import Loader from "../components/Loader";
import { API } from "aws-amplify";
import "./Orders.css";
import OrdersList from "../queries/ListOrdersQuery";

export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }

    this.setState({ loading: false });
  }

  validateForm() {
    return this.state;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  renderLoader() {
    return <Loader />;
  }
  renderOrdersList(orders) {
    return <OrdersList />;
  }

  render() {
    return (
      <div className="Orders">
        {this.state.loading
          ? this.renderLoader()
          : this.renderOrdersList(this.state.orders)}
      </div>
    );
  }
}
