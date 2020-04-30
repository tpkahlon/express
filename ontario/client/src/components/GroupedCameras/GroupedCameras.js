import React from "react";
import GroupedCamera from "./GroupedCamera";
import { Row, Col } from "react-bootstrap";

const GroupedCameras = ({ groupedCameras }) => {
  return (
    <>
      <h2>Grouped Cameras</h2>
      <hr />
      <Row>
        {groupedCameras.map((groupedCamera) => (
          <Col xs sm md={6} className="mb-3" key={groupedCamera.Id}>
            <GroupedCamera groupedCamera={groupedCamera} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GroupedCameras;
