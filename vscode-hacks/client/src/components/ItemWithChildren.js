import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Accordion, Card, Table, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

const ItemWithChildren = ({ index, source, title, settings, setSettings }) => {
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Table striped bordered hover responsive size='sm' className='m-0'>
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
                    <div className='cc d-flex align-items-center justify-content-end'>
                      <span>
                        <ReactMarkdown source={i.title} />
                      </span>
                      <CopyToClipboard
                        text={i.title}
                        onCopy={() =>
                          setSettings({
                            ...settings,
                            show: true,
                          })
                        }
                      >
                        <Button
                          size='sm'
                          variant='secondary'
                          className='d-flex align-items-center ml-3'
                        >
                          <MdContentCopy />
                        </Button>
                      </CopyToClipboard>
                    </div>
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
