import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const Keyword = ({ data, handleSubmit, handleChange }) => {
  const { keyword } = data;
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          type='text'
          placeholder='Enter a Sub-Reddit...'
          name='keyword'
          value={keyword}
          required
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button type='submit' variant='outline-secondary'>
            Go
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default Keyword;
