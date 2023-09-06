import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    cercastolibro: "",
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Cerca un Libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cerca qui"
                value={this.state.cercastolibro}
                onChange={(daje) => this.setState({ cercastolibro: daje.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((koob) => koob.title.includes(this.state.cercastolibro))
            .map((koob) => (
              <Col xs={12} md={4} key={koob.asin}>
                <SingleBook book={koob} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}
export default BookList;
