import React, { Component } from "react";
import { Alert } from "reactstrap";

export default class ErrorToast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Alert
          className="ErrorToast"
          color={this.props.color || "danger"}
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          {this.props.message || "Oops! We spilled the beans."}
        </Alert>
      </div>
    );
  }
}
