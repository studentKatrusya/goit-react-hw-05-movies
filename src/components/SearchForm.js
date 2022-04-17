import { Form, Btn, Input, Wrap } from './SearchForm.styled';

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
