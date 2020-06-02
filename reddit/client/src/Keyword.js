import React from 'react';
import {
  Form,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
  Navbar,
  Container,
} from 'react-bootstrap';

const Keyword = ({
  data,
  handleSubmit,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  const { keyword, before, count, after, options } = data;
  return (
    <Navbar bg='dark' expand='lg' fixed='top' className='shadow-lg'>
      <Container>
        <Form onSubmit={handleSubmit} className='w-100'>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='Enter a Sub-Reddit...'
              name='keyword'
              value={keyword}
              required
              onChange={handleChange}
              list='searches'
            />
            <datalist id='searches'>
              {options.map((item, key) => (
                <option key={key} value={item} />
              ))}
            </datalist>
            <InputGroup.Append>
              <ButtonGroup>
                <Button
                  type='submit'
                  variant='outline-primary'
                  className='rounded-0'
                >
                  Go
                </Button>
                {before && count !== 0 && (
                  <Button
                    variant='outline-primary'
                    onClick={handlePrevious}
                    className='rounded-0'
                  >
                    Previous
                  </Button>
                )}
                {after && (
                  <Button
                    variant='outline-success'
                    onClick={handleNext}
                    //className='rounded-0'
                  >
                    Next
                  </Button>
                )}
              </ButtonGroup>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Keyword;
