import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Content = ({ content }) => {
  if (content === null) return <div>Hello</div>;
  const { children } = content.data;
  // console.log(children);
  const items = children.map((i) => {
    const { id, title, url } = i.data;
    return (
      <ListGroup.Item
        key={id}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        action
      >
        {title}
      </ListGroup.Item>
    );
  });
  return (
    <div className='bg-dark text-white'>
      <Container>
        <Row>
          <Col>
            <ListGroup>{items}</ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
