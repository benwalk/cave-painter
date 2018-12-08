import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { API } from "aws-amplify";
import "./Orders.css";

export default class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }

    try {
      const orders = await this.fetchOrders();
      this.setState({ orders });
    } catch (e) {
      alert(e);
      console.log(e);
    }

    this.setState({ loading: false });
  }

  fetchOrders() {
    return API.get("orders", "/orders")
  }


  validateForm() {
    return this.state;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  renderOrdersList(orders) {
    return (
      <div className="orders">
      {/*}<ListGroup>
      {
        [{}].concat(orders).map(
          (order, i) =>
            i !== 0
              ? <LinkContainer
                  key={order.orderId}
                  to={`/order/${order.orderId}`}
                >
                  <ListGroupItem header={order.orderId}>
                    {order.createdAt}
                  </ListGroupItem>
                </LinkContainer>
              : <LinkContainer
                  key="new"
                  to="/order/new"
                >
                  <ListGroupItem>
                    <h4>
                      <b>{"\uFF0B"}</b> Place an Order
                    </h4>
                  </ListGroupItem>
                </LinkContainer>
          );
        }
        </ListGroup>*/}
        </div>
      );
    }

  render() {
    return (
      <div className="Orders">
        {this.renderOrdersList()}
      </div>
    );
  }
}
