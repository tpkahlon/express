import React from 'react';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import Moment from 'react-moment';

const Content = ({ content }) => {
  if (content === null) return <div>Hello</div>;
  const { children } = content.data;
  const items = children.map((i) => {
    const { id, title, url, created_utc } = i.data;
    return (
      <ListGroup.Item
        key={id}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        action
        variant='dark'
      >
        <div className='d-flex align-items-center justify-content-between'>
          <span className='mr-3'>{title}</span>
          <Badge variant='primary'>
            <Moment unix fromNow date={created_utc} />
          </Badge>
        </div>
      </ListGroup.Item>
    );
  });
  return (
    <div className='bg-dark text-white py-3'>
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
