import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    cercaStolibro: "",
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
                value={this.state.cercaStolibro}
                onChange={(daje) => this.setState({ cercaStolibro: daje.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((koob) => koob.title.toLowerCase().includes(this.state.cercaStolibro))
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
