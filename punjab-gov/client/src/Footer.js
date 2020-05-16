import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark shadow-lg'>
      <Container className='py-3 text-secondary'>
        <Row>
          <Col xs={12}>
            <p className='m-0'>
              Data collected from <em>https://punjab.gov.in</em>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
