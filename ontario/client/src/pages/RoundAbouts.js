import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const RoundAbout = ({ roundabout }) => {
  return (
    <tr>
      <td>{roundabout.Name}</td>
      <td>{roundabout.Type}</td>
      <td>{roundabout.Location}</td>
      <td>{roundabout.Region}</td>
      <td>{roundabout.Latitude}</td>
      <td>{roundabout.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${roundabout.Latitude},${roundabout.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const RoundAbouts = () => {
  const [data, setData] = useState({
    roundabouts: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { roundabouts } = json;
        setData({ ...data, roundabouts, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.roundabouts || data.roundabouts.length === 0) return <Loading />;
  return (
    <>
      <h2>RoundAbouts</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.roundabouts
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((roundabout) => (
                  <RoundAbout roundabout={roundabout} key={roundabout.Name} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default RoundAbouts;
