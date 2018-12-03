import React, { Component } from "react";
import { Button } from "reactstrap";
import { FiRefreshCw } from "react-icons/fi"
import "./LoaderButton.css";

export default class LoaderButton extends Component {

  render() {
    return (
      <div>
      <Button className="LoaderButton">
        {this.props.loading && <FiRefreshCw className="spinning" />}
        {!this.props.loading ? this.props.text : this.props.loadingText}
      </Button>
      </div>
  )}
}
