import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreacrumb } from "../../components/breadcrumb/Breacrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro]);
  const handleOnSumit = async (e) => {
    e.preventDefault();
    setFrmDataErro(initialFrmError)
     
    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
    console.log("form sumit request received", frmData);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,  
    });
    // console.log(name, value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreacrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSumit={handleOnSumit}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  );
};
