import React from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import Cam from './Cam';
import { uniqBy } from 'lodash';

const Channels = ({ data }) => {
  const { content } = data;
  const { hofdata } = content;
  return (
    <Row>
      <Col xs={12}>
        <Accordion defaultActiveKey="0">
          {uniqBy(hofdata, (e) => e.camera_url)
            .sort((a, b) =>
              a.hof_label_string.toLowerCase() <
              b.hof_label_string.toLowerCase()
                ? -1
                : 1
            )
            .map((i, index) => (
              <Cam key={i.id} data={i} index={index} />
            ))}
        </Accordion>
      </Col>
    </Row>
  );
};

export default Channels;
