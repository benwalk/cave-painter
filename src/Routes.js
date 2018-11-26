// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Orders from "./containers/Orders";
import NewOrder from "./containers/NewOrder"
import AppliedRoute from "./components/AppliedRoute";
import Coffee from "./containers/Coffee";
import NewCoffee from "./containers/NewCoffee";

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <AppliedRoute path="/login" exact component={Login} props={childProps} />
  <AppliedRoute path="/coffee" exact component={Coffee} props={childProps} />
  <AppliedRoute path="/coffee/new" exact component={NewCoffee} props={childProps} />
  <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
  <AppliedRoute path="/orders/new" exact component={NewOrder} props={childProps} />
  { /* Finally, catch all unmatched routes */ }
  <Route component={NotFound} />
</Switch>;
