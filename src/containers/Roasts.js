import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, CardTitle, CardHeader, CardText, CardImg, CardSubtitle, Table } from "reactstrap";

export default class Roasts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
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

  render() {
    return (
      <div className="Roasts">
      <Container>
        <Row>
          <Col>
            <Card className="border-secondary">
              <CardHeader>Roast #1001<div className="float-right">2018-11-25</div></CardHeader>
              <CardBody>
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
                      <td>00:00</td>
                      <td>370</td>
                      <td>375</td>
                      <td>.04</td>
                      <td>80</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>00:30</td>
                      <td>200</td>
                      <td>375</td>
                      <td>.04</td>
                      <td>80</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>00:00</td>
                      <td>370</td>
                      <td>375</td>
                      <td>.04</td>
                      <td>80</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>00:00</td>
                      <td>370</td>
                      <td>375</td>
                      <td>.04</td>
                      <td>80</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>00:00</td>
                      <td>370</td>
                      <td>375</td>
                      <td>.04</td>
                      <td>80</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
