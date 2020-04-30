import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Table } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const RoadCondition = ({ roadCondition }) => {
  return (
    <tr>
      <td>{roadCondition.LocationDescription}</td>
      <td>{roadCondition.RoadwayName}</td>
      <td>{roadCondition.Condition}</td>
      <td>{roadCondition.Visibility}</td>
      <td>{roadCondition.Drifting}</td>
      <td>{roadCondition.Region}</td>
      <td>{moment.unix(roadCondition.LastUpdated).format("LLL")}</td>
    </tr>
  );
};

const RoadConditions = () => {
  const [data, setData] = useState({
    roadConditions: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { roadconditions } = json;
        setData({
          ...data,
          roadConditions: roadconditions,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.roadConditions || data.roadConditions.length === 0)
    return <Loading />;
  return (
    <>
      <h2>Road Conditions</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Condition</th>
                <th>Visibility</th>
                <th>Drifting</th>
                <th>Region</th>
                <th>Roadway Name</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.roadConditions
                .sort((a, b) =>
                  a.RoadwayName.toLowerCase() < b.RoadwayName.toLowerCase()
                    ? -1
                    : 1
                )
                .map((roadCondition) => (
                  <RoadCondition
                    roadCondition={roadCondition}
                    key={roadCondition.Id}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default RoadConditions;
