import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card } from "react-bootstrap";

import fantasy from "./assets/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Row>
        {fantasy.map((book, index) => (
          <Col md={4} className="mb-3" key={index}>
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default AllTheBooks;
