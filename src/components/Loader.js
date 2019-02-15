import React, { Component } from "react";
import { Progress } from "reactstrap";

export default class Loader extends Component {
  render() {
    return (
      <div>
        <Progress
          className="Loader"
          animated={this.props.animated || true}
          color={this.props.color || "warning"}
          value={this.props.value || "100"}
        />
      </div>
    );
  }
}
