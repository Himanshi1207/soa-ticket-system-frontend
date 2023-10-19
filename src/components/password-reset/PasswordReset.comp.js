import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const ResetPassword = ({
  handleOnChange,
  email,
  handleOnResetSumit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSumit}>
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

            <Button type="sumbit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={()=>formSwitcher('login')}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};
ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSumit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
