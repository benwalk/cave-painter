import React, { Component } from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from "reactstrap";

export default class Coffee extends Component {
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
    this.props.history.push("/coffee/new");
  }

  render() {
    return (
      <div className="Coffee">
      <Container>
        <Row>
          <Col>
          <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Guatemala - Corral Grande</CardTitle>
                <CardSubtitle>2018</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
                <Button color="primary">View</Button>
                <Button>Edit</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Ethiopia - Daniel Mujane</CardTitle>
                <CardSubtitle>2018</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
                <Button color="primary">View</Button>
                <Button>Edit</Button>
              </CardBody>
            </Card></Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fall Blend</CardTitle>
                <CardSubtitle>2018</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card content.</CardText>
                <Button color="primary">View</Button>
                <Button>Edit</Button>
              </CardBody>
            </Card>
            </Col>
          <Col>
          <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the content.</CardText>
                <Button color="primary">View</Button>
                <Button>Edit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
