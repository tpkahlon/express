import React from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import { FaSteam } from 'react-icons/fa';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const Menu = ({ data, handleNext, handlePrevious }) => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      fixed='top'
      className='shadow-lg'
    >
      <Navbar.Brand href='/'>
        <div className='d-flex align-items-center'>
          <FaSteam />
          <span className='ml-2'>
            <em>Human life spent on Games</em>
          </span>
        </div>
      </Navbar.Brand>
      <Form inline className='ml-auto'>
        {data.page > 1 && (
          <Button
            onClick={handlePrevious}
            variant='secondary'
            className='d-flex align-items-center'
          >
            <GrLinkPrevious />
          </Button>
        )}
        <Button
          onClick={handleNext}
          variant='light'
          className='d-flex align-items-center ml-2'
        >
          <GrLinkNext />
        </Button>
      </Form>
    </Navbar>
  );
};

export default Menu;
