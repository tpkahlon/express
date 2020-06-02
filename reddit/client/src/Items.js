import React from 'react';
import Moment from 'react-moment';
import { ListGroup, Badge } from 'react-bootstrap';

const Items = ({ children }) => {
  return (
    <>
      {children.map((i) => {
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
      })}
    </>
  );
};

export default Items;
