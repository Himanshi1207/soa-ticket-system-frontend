import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreacrumb } from "../../components/breadcrumb/Breacrumb.comp";
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
        <PageBreacrumb page="Dashboard"/>         
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{
              fontSize: "2rem",
              padding: "10px 30px",
              color: "white",
            }}
          >
            Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
