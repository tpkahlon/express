import React, { useState } from "react";
import Camera from "./Camera";
import { Form, Row, Col } from "react-bootstrap";
import { uniqBy } from "lodash";

const Cameras = ({ cameras }) => {
  const [data, setData] = useState({ allCameras: [], currentCity: null });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const revisedCameras = cameras
    .filter((i) => i.Status === "Enabled")
    .sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1));
  const filterCamerasByCity =
    data.currentCity === null || data.currentCity === ""
      ? revisedCameras
      : revisedCameras.filter((i) => i.CityName === data.currentCity);
  const cities = uniqBy(revisedCameras, (e) => e.CityName)
    .map((i) => i.CityName)
    .filter((el) => el != null && el !== "")
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  return (
    <>
      <Form>
        <Form.Group controlId="city">
          <Form.Label>Filter Cameras by City</Form.Label>
          <Form.Control
            as="select"
            custom
            name="currentCity"
            onChange={handleChange}
          >
            <option value="">Select a City</option>
            {cities.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Row>
        {filterCamerasByCity.map((camera) => (
          <Col xs sm md={6} className="mb-3" key={camera.Id}>
            <Camera camera={camera} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cameras;
