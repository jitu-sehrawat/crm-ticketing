import { Jumbotron, Form, Button} from "react-bootstrap";
import PropTypes from 'prop-types';

import './add-ticket-form.style.css';

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt, frmDataErro}) => {
  console.log(frmDt);
  return (
    <Jumbotron className="mt-3 add-new-ticket">
      <h3>Add New Ticket</h3>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                name="subject"
                value={frmDt.subject}
                onChange={handleOnChange}
                placeholder="Enter Subject"
                required
              />
              <Form.Text>{frmDataErro.subject && 'Subject is required'}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issue found</Form.Label>
              <Form.Control 
                type="date"
                name="issueDate"
                value={frmDt.issueDate}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issue Details</Form.Label>
              <Form.Control 
                as="textarea"
                row="5"
                name="detail"
                value={frmDt.detail}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button type="submit" variant="success">Login</Button>
          </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataErro: PropTypes.object.isRequired
}