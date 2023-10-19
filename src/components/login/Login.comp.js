import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const LoginForm = ({
  handleOnChange,
  email,
  pass,
  handleOnSumit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSumit}>
            <Form.Group className="pb-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="pb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Button type="sumbit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={() => formSwitcher("reset")}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};
LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSumit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
