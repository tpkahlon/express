import React, { useState } from "react";
import GroupedCamera from "./GroupedCamera";
import { Form, Row, Col } from "react-bootstrap";
import { uniqBy } from "lodash";

const GroupedCameras = ({ groupedCameras }) => {
  const revisedData = groupedCameras
    // .filter((i) => i.Views[0].Status === "Enabled")
    .sort((a, b) =>
      a.Views[0].Name.toLowerCase() < b.Views[0].Name.toLowerCase() ? -1 : 1
    );
  const [data, setData] = useState({
    data: revisedData,
    currentOrg: null,
  });
  const filterData =
    data.currentOrg === null || data.currentOrg === ""
      ? revisedData
      : revisedData.filter((i) => i.Organization === data.currentOrg);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const organizations = uniqBy(revisedData, (e) => e.Organization)
    .map((i) => i.Organization)
    .filter((el) => el != null && el !== "")
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  return (
    <>
      <h2>Grouped Cameras</h2>
      <hr />
      <Form as={Row}>
        <Form.Group as={Col} xs={12} controlId="currentOrg">
          <Form.Label>Filter Cameras by Organization</Form.Label>
          <Form.Control
            as="select"
            custom
            name="currentOrg"
            onChange={handleChange}
          >
            <option value="">Select an Organization</option>
            {organizations.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Row>
        {filterData.map((groupedCamera) => (
          <Col xs sm md={6} className="mb-3" key={groupedCamera.Id}>
            <GroupedCamera groupedCamera={groupedCamera} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GroupedCameras;
