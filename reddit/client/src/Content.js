import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import Items from './Items';

const Content = ({ data }) => {
  const { content, l } = data;
  if (l || content === null) {
    return (
      <div className='text-white bg-dark d-flex justify-content-center align-items-center loading'>
        <ReactLoading type='balls' color='#fff' height='5rem' width='5rem' />
      </div>
    );
  } else {
    const { children } = content.data;
    return (
      <div className='text-white bg-dark mt-3 app'>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                <Items children={children} />
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Content;
