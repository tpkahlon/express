import React, { useState } from "react";
import Camera from "./Camera";
import { Form, Row, Col } from "react-bootstrap";
import { uniqBy } from "lodash";

const Cameras = ({ cameras }) => {
  const revisedData = cameras
    .filter((i) => i.Status === "Enabled")
    .sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1));
  const [data, setData] = useState({
    data: revisedData,
    currentCity: null,
    currentRoadway: null,
  });
  const filterData =
    data.currentRoadway === null &&
    data.currentRoadway === "" &&
    data.currentCity === null &&
    data.currentCity === ""
      ? revisedData
      : data.currentCity && data.currentRoadway
      ? revisedData.filter(
          (i) =>
            i.CityName === data.currentCity &&
            i.RoadwayName === data.currentRoadway
        )
      : data.currentCity
      ? revisedData.filter((i) => i.CityName === data.currentCity)
      : data.currentRoadway
      ? revisedData.filter((i) => i.RoadwayName === data.currentRoadway)
      : revisedData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const cities = uniqBy(revisedData, (e) => e.CityName)
    .map((i) => i.CityName)
    .filter((el) => el != null && el !== "")
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  const roadways = uniqBy(revisedData, (e) => e.RoadwayName)
    .map((i) => i.RoadwayName)
    .filter((el) => el != null && el !== "")
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  return (
    <>
      <Form as={Row}>
        <Form.Group as={Col} xs={12} sm={6} controlId="city">
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
        <Form.Group as={Col} xs={12} sm={6} controlId="city">
          <Form.Label>Filter Cameras by Roadway</Form.Label>
          <Form.Control
            as="select"
            custom
            name="currentRoadway"
            onChange={handleChange}
          >
            <option value="">Select a Roadway</option>
            {roadways.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Row>
        {filterData.map((camera) => (
          <Col xs sm md={6} className="mb-3" key={camera.Id}>
            <Camera camera={camera} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cameras;
