import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, CardHeader, CardText, CardImg, CardSubtitle, Table } from "reactstrap";
import LoaderButton from "../components/LoaderButton";

export default class Roasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  handleNew = event => {
    this.props.history.push("/roasts/new");
  }

  validateForm() {
    return this.state.loading;
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });
    window.location.reload();
  }

  handleNewRow() {

  }

  render() {
    return (
      <div className="Roasts">
      <Container>
        <Row>
          <Col>
            <Card className="border-secondary">
              <CardHeader>Roast #1001<div className="float-right">2018-11-25</div></CardHeader>
              <CardBody>
              <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Label for="Coffee">Coffee</Label>
                  <Input type="text" name="coffee" id="coffee" value="Washed Guatemalan" disabled/>
                </Col>
                <Col>
                  <Label for="Roast Profile">Roast Profile</Label>
                  <Input type="text" name="rost-profile" id="roast-profile" value="Filtered" disabled />
                 </Col>
                 <Col>
                   <Label for="batches">Batches</Label>
                   <Input type="text" name="batches" id="batches" value="3" disabled/>
                 </Col>
                 <Col>
                   <Label for="batches">Batch Size</Label>
                   <Input type="text" name="batches" id="batches" value="16#" disabled/>
                 </Col>
                 {/*<Col className="align-self-end">
                   }<LoaderButton
                     block
                     type="submit"
                     disabled={!this.validateForm()}
                     text="Save Roast"
                     loading={this.state.loading}
                     loadingText="Saving…"
                   />
                 </Col>*/}
               </Row>
               <br/>
               <p>Roast Notes</p>
               <Row>
                <Table responsive>
                  <thead>
                    <tr>
                      <th scope="col">Time</th>
                      <th scope="col">BT</th>
                      <th scope="col">ET</th>
                      <th scope="col">Gas</th>
                      <th scope="col">Fan</th>
                      <th scope="col">Etc</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Input
                          type="text"
                          id="time"
                          name="time"
                          value={this.state.time}
                          placeholder="00:00"
                          onChange={this.handleChange} />
                        </td>
                      <td>
                        <Input
                          type="text"
                          id="bt"
                          name="bt"
                          value={this.state.bt}
                          placeholder="370"
                          onChange={this.handleChange} />
                      </td>
                      <td>
                      <Input
                        type="text"
                        id="et"
                        name="et"
                        value={this.state.et}
                        placeholder="375"
                        onChange={this.handleChange} />
                      </td>
                      <td>
                      <Input
                        type="text"
                        id="gas"
                        name="gas"
                        value={this.state.gas}
                        placeholder=".04"
                        onChange={this.handleChange} />
                      </td>
                      <td>
                      <Input
                        type="text"
                        id="fan"
                        name="fan"
                        value={this.state.fan}
                        placeholder="80"
                        onChange={this.handleChange} />
                      </td>
                      <td>
                      <Input
                        type="text"
                        id="etc"
                        name="etc"
                        value={this.state.etc}
                        placeholder=""
                        onChange={this.handleChange} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                  <LoaderButton
                    block
                    text="Add row"
                    loading={this.state.loading}
                    loadingText="Adding…"
                    onSubmit={this.handleNewRow}
                  />
                </Col>
                </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
