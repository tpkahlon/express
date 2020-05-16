import React from 'react';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';

const Data = ({ settings }) => {
  const { content } = settings;
  return (
    <Container>
      <Row>
        <Col xs={12} className='mt-3'>
          <Table variant='dark' size='sm' responsive striped bordered hover>
            <thead>
              <tr>
                <th>District</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {content.map((i, index) => {
                const { status, source } = i;
                return (
                  <tr key={index}>
                    <td>
                      <a
                        href={source}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-light text-decoration-none'
                      >
                        {source}
                      </a>
                    </td>
                    <td>
                      {status ? (
                        <Badge variant='success'>Live</Badge>
                      ) : (
                        <Badge variant='danger'>Down</Badge>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Data;
