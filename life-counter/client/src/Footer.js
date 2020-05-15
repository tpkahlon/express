import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-dark shadow-lg'>
      <Container className='py-3 text-secondary'>
        <Row>
          <Col xs={12}>
            <p className='m-0'>
              "The average human spends roughly 79 years or 28,835 days on
              Earth. So, there are an average of 692,040 hours in a lifetime." -
              Wikipedia.
            </p>
            <p className='m-0'>
              Data collected from <em>https://steamcharts.com</em>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
