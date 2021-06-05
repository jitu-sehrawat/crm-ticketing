import { Col, Container, Row, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { PageBreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp';

import tickets from '../../assets/data/dummy-tickets.json';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Dashboard"/>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="info">Add new Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <div>Recently added tickets</div>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets}/>
        </Col>
      </Row>
    </Container>
  )
}