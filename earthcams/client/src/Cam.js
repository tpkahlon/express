import React from 'react';
import ReactPlayer from 'react-player';
import { Accordion, Card } from 'react-bootstrap';

const Cam = ({ data, index }) => {
  const { camera_url, hof_label_string, image_source } = data;
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        <p className="m-0 text-capitalize">{hof_label_string}</p>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <div className="rounded overflow-hidden">
            <ReactPlayer
              className="w-100"
              url={camera_url}
              light={image_source}
              controls={true}
            />
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Cam;
