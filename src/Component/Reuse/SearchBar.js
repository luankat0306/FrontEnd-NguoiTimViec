import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="search-bar"
        style={{ top: this.props.top, position: this.props.position }}
      >
        <Form style={{ width: "100%" }}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridB">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <div style={{ height: "calc(1.5em + .75rem + 2px);" }}>
              <Button variant="success">
                <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to="/nguoi-tim-viec/tim-kiem-cong-viec"
                >
                  Tìm Kiếm
                </NavLink>
              </Button>
            </div>
          </Form.Row>
        </Form>
      </div>
    );
  }
}
