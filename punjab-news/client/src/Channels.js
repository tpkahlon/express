import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

const TITLES = [
  'ਪਹਿਲਾ ਸਫ਼ਾ',
  'ਰਾਸ਼ਟਰੀ / ਅੰਤਰਰਾਸ਼ਟਰੀ',
  'ਪੰਜਾਬ / ਜਨਰਲ',
  'ਖੇਡ ਸੰਸਾਰ',
  'ਸੰਪਾਦਕੀ',
  'ਦਿੱਲੀ',
  'ਗੁਰਦਾਸਪੁਰ / ਬਟਾਲਾ / ਪਠਾਨਕੋਟ',
  'ਬਠਿੰਡਾ / ਮਾਨਸਾ / ਸੰਗਰੂਰ / ਬਰਨਾਲਾ',
  'ਫਰੀਦਕੋਟ / ਮੁਕਤਸਰ / ਫਿਰੋਜ਼ਪੁਰ / ਫਾਜ਼ਿਲਕਾ / ਮੋਗਾ',
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
      Array.from(dom.querySelectorAll("a[href*='/news/']")).map((link) => ({
        content: link.textContent,
        src: `http://beta.ajitjalandhar.com${link.getAttribute('href')}`,
      }))
    );
  });
  return (
    <Row>
      <Col xs={12}>
        <Accordion defaultActiveKey="0">
          {links.map((link, index) => (
            <Card bg="dark" text="light" key={index}>
              <Accordion.Toggle as={Card.Header} eventKey={index}>
                <h1>{TITLES[index]}</h1>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  {link
                    .filter((i) => !i.content.includes('ਪੂਰੀ'))
                    .map((j, k) => (
                      <div key={k} className="news">
                        <span>{j.content}</span>
                        <a
                          href={j.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaPlusCircle />
                        </a>
                      </div>
                    ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Col>
    </Row>
  );
};

export default Channels;
