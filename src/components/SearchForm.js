import { Form, Btn, Input, Wrap } from './SearchForm.styled';
import PropTypes from 'prop-types';

export default function SearchForm({ handleSetQuery, handleSubmit, value }) {
  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="movie name"
          onChange={handleSetQuery}
          value={value}
        />
        <Btn type="submit">Search</Btn>
      </Form>
    </Wrap>
  );
}
SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
