import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Accordion, Card, Table } from 'react-bootstrap';

const ItemWithChildren = ({ index, source, title }) => {
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Table striped bordered hover size='sm' className='m-0'>
            <thead>
              <tr>
                <th className='text-right'>Prefix</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {source.map((i, index) => (
                <tr key={index}>
                  <td className='text-right'>
                    <ReactMarkdown source={i.title} />
                  </td>
                  <td>
                    <ReactMarkdown source={i.text} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithChildren;
