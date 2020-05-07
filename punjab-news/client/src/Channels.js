import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Channels = ({ html }) => {
  const { content } = html;
  const parser = new DOMParser();
  const dom = parser.parseFromString(content, 'text/html');
  const links = Array.from(
    dom.querySelectorAll("a[href*='/news/'], a[href*='/latestnews/']")
  )
    .map((link) => link.textContent)
    .filter((link) => link !== 'ਪੂਰੀ ਖ਼ਬਰ  »');
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="my-3">
              {links.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Channels;
