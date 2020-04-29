import React from "react";
import Camera from "./Camera";
import { Row, Col } from "react-bootstrap";

const Cameras = ({ cameras }) => {
  const revisedCameras = cameras
    .filter((i) => i.Status === "Enabled")
    .sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1));
  return (
    <>
      <Row>
        {revisedCameras.map((camera) => (
          <Col xs sm md={6} className="mb-3" key={camera.Id}>
            <Camera camera={camera} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cameras;
