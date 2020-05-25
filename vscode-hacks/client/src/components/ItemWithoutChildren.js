import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Accordion, Card } from 'react-bootstrap';

const ItemWithoutChildren = ({ index, source, title }) => {
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <ReactMarkdown source={source} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithoutChildren;
