import React from 'react';
import { Navbar, Form, Button, ButtonGroup } from 'react-bootstrap';
import { FaSteam } from 'react-icons/fa';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const Menu = ({ data, handleNext, handlePrevious }) => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      fixed='top'
      className='shadow-lg flex-nowrap'
    >
      <Navbar.Brand href='/' className='text-truncate'>
        <div className='d-flex align-items-center flex-nowrap'>
          <FaSteam />
          <span className='ml-2 text-truncate'>
            <em>Human life spent on Games</em>
          </span>
        </div>
      </Navbar.Brand>
      <Form inline className='ml-auto'>
        <ButtonGroup aria-label='Pagination buttons'>
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
            className='d-flex align-items-center'
          >
            <GrLinkNext />
          </Button>
        </ButtonGroup>
      </Form>
    </Navbar>
  );
};

export default Menu;
