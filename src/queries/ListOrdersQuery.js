import React, { Component } from "react";
import { Button, Progress } from "reactstrap";
import Order from "../containers/Order";
import Loader from "../components/Loader";
import ErrorToast from "../components/ErrorToast";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LIST_ORDERS = gql`
  {
    listOrders {
      id
      createdAt
      customer {
        email
      }
      lineItems {
        name
        quantity
      }
    }
  }
`;

export default class ListOrdersQuery extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Query query={LIST_ORDERS} notifyOnNetworkStatusChange>
        {({ loading, error, data, refetch, networkStatus }) => {
          if (networkStatus === 4) return <Loader />; // 1-8 for various things
          if (loading) return <Loader />;
          if (error) return <ErrorToast />;

          return (
            <div>
              {data.listOrders.map(function(order) {
                return <Order order={order} />;
              })}
              <Button onClick={() => refetch()}>Refetch!</Button>
            </div>
          );
        }}
      </Query>
    );
  }
}
