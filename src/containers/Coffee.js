import React, { Component } from "react";
import { PageHeader, Button, ButtonToolbar, Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Coffee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    }
  }

  handleNew = event => {
    this.props.history.push("/coffee/new");
  }

  render() {
    return (
      <div className="Coffee">
      <PageHeader>
        Coffees
        <ButtonToolbar>
          <Button bsStyle="success" bsSize="small" type="submit" onClick={this.handleNew}>New</Button>
        </ButtonToolbar>
      </PageHeader>
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>Guatemala</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>Some default panel content here.</Panel.Body>
          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
          <Panel.Body>Some more panel content here.</Panel.Body>
        </Panel.Collapse>
        </Panel>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>Indonesia</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>Some default panel content here.</Panel.Body>
            <ListGroup>
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
              <ListGroupItem>&hellip;</ListGroupItem>
            </ListGroup>
            <Panel.Body>Some more panel content here.</Panel.Body>
          </Panel.Collapse>
          </Panel>
          <Panel defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>Mexico</Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>Some default panel content here.</Panel.Body>
              <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>&hellip;</ListGroupItem>
              </ListGroup>
              <Panel.Body>Some more panel content here.</Panel.Body>
            </Panel.Collapse>
            </Panel>
      </div>
    );
  }
}
