import React, { Component } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row
} from "reactstrap";

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card className="border-secondary">
          <CardHeader>
            <Badge color="warning">Order #{this.props.order.id}</Badge>
            {<div className="float-right">{this.props.order.createdAt}</div>}
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="4">
                <Label for="Customer">Customer</Label>
                <Input
                  type="text"
                  name="coffee"
                  id="coffee"
                  value={this.props.order.customer.email}
                  disabled
                />
              </Col>
              <Col>
                <Label for="LineItems">Line Items</Label>
                {this.props.order.lineItems.map(function(item) {
                  return (
                    <div>
                      <Input
                        type="text"
                        name="item"
                        id="item"
                        value={item.name}
                        disabled
                      />
                      <Input
                        type="text"
                        name="item"
                        id="item"
                        value={item.quantity}
                        disabled
                      />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
