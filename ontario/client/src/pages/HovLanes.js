import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const HovLane = ({ hovLane }) => {
  return (
    <tr>
      <td>{hovLane.Name}</td>
      <td>{hovLane.Roadway}</td>
      <td>{hovLane.Region}</td>
      <td>{hovLane.Latitude}</td>
      <td>{hovLane.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${hovLane.Latitude},${hovLane.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const HovLanes = () => {
  const [data, setData] = useState({
    hovLanes: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { hovlanes } = json;
        setData({
          ...data,
          hovLanes: hovlanes,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.hovLanes || data.hovLanes.length === 0) return <Loading />;
  return (
    <>
      <h2>HOV Lanes</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roadway</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.hovLanes
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((hovLane) => (
                  <HovLane hovLane={hovLane} key={hovLane.Id} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default HovLanes;
