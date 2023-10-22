import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";
export const AddTicketForm = ({
  handleOnSumit,
  handleOnChange,
  frmDt,
  frmDataErro,
}) => {
  console.log(frmDt);
  return (
    <div className="jumbotrom p-5 mt-5 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSumit}>
        <Form.Group className="pb-4" as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.suject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Text className="text-danger">{frmDataErro.subject && "Subject is required"}</Form.Text>
        <Form.Group className="pb-4" as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="pb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmDt.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button
          type="sumbit"
          block="true"
          variant="info"
          style={{ color: "white" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
AddTicketForm.propTypes = {
  handleOnSumit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired,
};
