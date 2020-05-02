import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const Animals = ({ animals }) => {
  return (
    <Row>
      {animals.map((animal, index) => (
        <Col xs={12} sm={6} md={4} key={index}>
          <Card className="mb-3 shadow">
            <Card.Img variant="top" src={animal.thumbnail} />
            <Card.Body>
              <Card.Title>{animal.name}</Card.Title>
              <Button
                variant="primary"
                href={`https://en.wikipedia.org/wiki/${animal.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Animals;
