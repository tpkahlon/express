import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const TransitHub = ({ transitHub }) => {
  return (
    <tr>
      <td>{transitHub.Name}</td>
      <td>{transitHub.Address}</td>
      <td>
        <a href={transitHub.Website} target="_blank" rel="noopener noreferrer">
          {transitHub.Website}
        </a>
      </td>
      <td>{transitHub.Region}</td>
      <td>{transitHub.Latitude}</td>
      <td>{transitHub.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${transitHub.Latitude},${transitHub.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const TransitHubs = () => {
  const [data, setData] = useState({
    transitHubs: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { transithub } = json;
        setData({
          ...data,
          transitHubs: transithub,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.transitHubs || data.transitHubs.length === 0) return <Loading />;
  return (
    <>
      <h2>Transit Hubs</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Website</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.transitHubs
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((transitHub) => (
                  <TransitHub transitHub={transitHub} key={transitHub.Id} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default TransitHubs;
