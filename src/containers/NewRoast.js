import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardColumns } from "reactstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewRoast.css";

export default class NewRoast extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      loading: false,
      content: ""
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });
    // window.location.reload();
  }

  render() {
    return (
        <Container>
          <h2>Enter New Roast</h2>
          <Form onSubmit={this.handleSubmit}>
            {/* reactstrap way to do this */}
            <Row>
              <Col>
                <FormGroup>
                  <Label for="time">Time</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">BT</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">ET</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Gas</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Fan</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Etc</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="time">Time</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Before Temp</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">After Temp</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Gas</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Fan</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="time">Etc</Label>
                  <Input
                    type="text"
                    id="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
        </Form>
        </Container>
    );
  }
}
