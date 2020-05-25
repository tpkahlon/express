import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Accordion, Card, Table, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

const ItemWithoutChildren = ({
  index,
  source,
  title,
  settings,
  setSettings,
}) => {
  return (
    <Card bg='dark' text='light'>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <ReactMarkdown
            source={source}
            renderers={{
              table: ({ children }) => {
                return (
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    size='sm'
                    className='m-0'
                  >
                    {children}
                  </Table>
                );
              },
              tableCell: ({ children }) => {
                return (
                  <td>
                    <div className='cc d-flex align-items-center justify-content-end'>
                      <span>{children}</span>
                      <CopyToClipboard
                        text={children[0].props.value.replace(/`/gi, '')}
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
                );
              },
            }}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithoutChildren;
