import React from 'react';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';

const Data = ({ settings }) => {
  const { content } = settings;
  const { status, source } = content;
  return (
    <Container>
      <Row>
        <Col xs={6} className='mt-3'>
          <Table variant='dark' size='sm' responsive striped bordered hover>
            <thead>
              <tr>
                <th>District</th>
              </tr>
            </thead>
            <tbody>
              {source.map((i, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href={i}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-light text-decoration-none'
                    >
                      {i}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={6} className='mt-3'>
          <Table variant='dark' size='sm' responsive striped bordered hover>
            <thead>
              <tr>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {status.map((i, index) => (
                <tr key={index}>
                  <td>
                    {i ? (
                      <Badge variant='success'>Live</Badge>
                    ) : (
                      <Badge variant='danger'>Down</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Data;
