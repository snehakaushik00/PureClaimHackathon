import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Card from "./Card";

const URLInput = () => {
  return (
    <Card>
    <section className="url-input text-center">
      <h3>Enter Product URL</h3>
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form.Group controlId="formURL">
              <Form.Control type="url" placeholder="Enter product URL" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit" className="mt-5 ">
          Submit
        </Button>
      </Form>
    </section>
    </Card>
  );
};

export default URLInput;
