import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FETCH_ORDER = gql`
  {
    listOrders {
      id
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

const FetchOrderQuery = ({ orderId }) => (
  <Query query={FETCH_ORDERS} variables={{ orderId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.order.doStuff();
    }}
  </Query>
);

export default ListOrdersQuery;
