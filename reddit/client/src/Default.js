import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Default = ({ message }) => {
  return (
    <div className='d-flex align-items-center justify-content-center text-center min-vh-100 bg-dark text-white'>
      <Container>
        <Row>
          <Col>{message}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Default;
