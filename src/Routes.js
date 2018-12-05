// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import AppliedRoute from "./components/AppliedRoute";
// containers
import Coffee from "./containers/Coffee";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewCoffee from "./containers/NewCoffee";
import NewOrder from "./containers/NewOrder";
import NewRoast from "./containers/NewRoast";
import NotFound from "./containers/NotFound";
import Orders from "./containers/Orders";
import Roasts from "./containers/Roasts";

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <AppliedRoute path="/login" exact component={Login} props={childProps} />
  <AppliedRoute path="/coffee" exact component={Coffee} props={childProps} />
  <AppliedRoute path="/coffee/new" exact component={NewCoffee} props={childProps} />
  <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
  <AppliedRoute path="/orders/new" exact component={NewOrder} props={childProps} />
  <AppliedRoute path="/roasts" exact component={Roasts} props={childProps} />
  <AppliedRoute path="/roasts/new" exact component={NewRoast} props={childProps} />
  { /* Finally, catch all unmatched routes */ }
  <Route component={NotFound} />
</Switch>;
