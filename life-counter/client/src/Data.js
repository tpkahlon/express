import React from 'react';
import humanizeDuration from 'humanize-duration';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Data = ({ data }) => {
  const parser = new DOMParser();
  const DOM = parser.parseFromString(data, 'text/html');
  const GAME = Array.from(DOM.querySelectorAll(`tbody tr`)).map((game) => {
    const name = game.querySelector('a').textContent.trim();
    const humans = game.querySelector('.num').textContent.trim();
    const life = humanizeDuration(
      Number(game.querySelector('.player-hours').textContent) * 60 * 60
    );
    return { name, humans, life };
  });
  return (
    <Container>
      <Row>
        <Col xs={12} className='mt-3'>
          <Table variant='dark' size='sm' responsive striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Human life spent in Years</th>
                <th>Users</th>
              </tr>
            </thead>
            <tbody>
              {GAME.map((i, index) => (
                <tr key={index}>
                  <td>{i.name}</td>
                  <td>{i.life}</td>
                  <td>{i.humans}</td>
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
