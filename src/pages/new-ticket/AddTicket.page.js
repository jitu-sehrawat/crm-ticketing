import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp"
import { PageBreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp"
import { shortText } from '../../utils/validation'

const initialFrmDt = {
  subject: '',
  issueDate: '',
  detail: ''
}
const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false
}
export const  AddTicket = () => {
  const [frmData, setFrmData] =  useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] =  useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataErro]);

  const handleOnChange = e => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    setFrmDataErro(initialFrmError);
    const isSubjectValid = await shortText(frmData.subject);
    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid
    })
    console.log('FOrm submitted', frmData);
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  )
}