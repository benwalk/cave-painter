import React, { Component } from "react";
import { Button } from "reactstrap";
import Glyphicon from "bootstrap";
import "./LoaderButton.css";

export default class LoaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    return (

      <Button>
        {this.state.isLoading && <Glyphicon glyph="refresh" className="spinning" />}
        {!this.state.isLoading ? this.state.text : this.state.loadingText}
      </Button>
  )}
}
