import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp'
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketLists = ()  => {
  const [str, setStr] = useState('');
  const [dispTicket, setdispTicket] = useState(tickets);
  useEffect(() => {}, [str, dispTicket])

  const handleOnChange = e => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  }

  const searchTicket = strr => {
    const displayTicket = tickets.filter(row => row.subject.toLowerCase().includes(strr.toLowerCase()));
    setdispTicket(displayTicket);
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>
            Add new Ticket
          </Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            handleOnChange={handleOnChange}
            str={str}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket}/>
        </Col>
      </Row>
    </Container>
  )
}