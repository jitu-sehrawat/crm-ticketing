import { Form } from "react-bootstrap";
import PropTypes from 'prop-types';

export const SearchForm = ({handleOnChange, str}) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Search: </Form.Label>
        <Form.Control
          name="search"
          placeholder="Seach ..."
          onChange={handleOnChange}
          value={str}
          required
        />
      </Form.Group>
    </div>
  )
}

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}