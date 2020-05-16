import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaCheckDouble } from 'react-icons/fa';

const Menu = () => {
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
          <FaCheckDouble className='text-light' />
          <span className='ml-2 text-truncate'>
            <em>Punjab Districts Website Health Report</em>
          </span>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Menu;
