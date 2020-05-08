import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

const TITLES = [
  'ਪਹਿਲਾ ਸਫ਼ਾ',
  'ਰਾਸ਼ਟਰੀ-ਅੰਤਰਰਾਸ਼ਟਰੀ',
  'ਪੰਜਾਬ / ਜਨਰਲ',
  'ਖੇਡ ਸੰਸਾਰ',
  'ਸੰਪਾਦਕੀ',
  'ਦਿੱਲੀ',
  'ਗੁਰਦਾਸਪੁਰ / ਬਟਾਲਾ / ਪਠਾਨਕੋਟ',
  'ਬਠਿੰਡਾ / ਮਾਨਸਾ / ਸੰਗਰੂਰ / ਬਰਨਾਲਾ',
  'ਫਰੀਦਕੋਟ / ਮੁਕਤਸਰ / ਫਿਰੋਜ਼ਪੁਰ, ਫਾਜ਼ਿਲਕਾ / ਮੋਗਾ',
  'ਚੰਡੀਗੜ੍ਹ / ਰੋਪੜ / ਪਟਿਆਲਾ / ਫ਼ਤਿਹਗੜ੍ਹ',
  'ਲੁਧਿਆਣਾ / ਖੰਨਾ / ਜਗਰਾਓਂ',
  'ਅੰਮ੍ਰਿਤਸਰ / ਤਰਨ-ਤਾਰਨ',
  'ਜਲੰਧਰ / ਕਪੂਰਥਲਾ / ਨਵਾਂਸ਼ਹਿਰ / ਹੁਸ਼ਿਆਰਪੁਰ',
];

const Channels = ({ html }) => {
  let links = [];
  const { content } = html;
  content.forEach((i) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(i, 'text/html');
    links.push(
      Array.from(dom.querySelectorAll("a[href*='/news/']")).map(
        (link) => link.textContent
      )
    );
  });
  return (
    <Row>
      <Col xs={12}>
        <Accordion defaultActiveKey="0">
          {links.map((link, index) => {
            return (
              <Card bg="dark" text="light">
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                  <h1>{TITLES[index]}</h1>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    {link
                      .filter((i) => !i.includes('ਪੂਰੀ'))
                      .map((j, k) => (
                        <p key={k}>{j}</p>
                      ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Col>
    </Row>
  );
};

export default Channels;
