import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Load = ({ load }) => {
  return (
    <tr>
      <td>{load.SegmentName ? load.SegmentName : "No segment mentioned"}</td>
      <td>
        {load.RouteDescription ? load.RouteDescription : "No route mentioned"}
      </td>
      <td>{load.Status ? load.Status : "No status mentioned"}</td>
      <td>{moment(load.Date).format("LL")}</td>
      <td>{load.Latitude}</td>
      <td>{load.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${load.Latitude},${load.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const Loads = () => {
  const [data, setData] = useState({
    loads: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { loads } = json;
        setData({ ...data, loads, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.loads || data.loads.length === 0) return <Loading />;
  return (
    <>
      <h2>Loads</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Segment</th>
                <th>Route</th>
                <th>Status</th>
                <th>Date</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.loads
                .sort((a, b) => (a.Date > b.Date ? -1 : 1))
                .map((load) => (
                  <Load load={load} key={load.Id} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Loads;
