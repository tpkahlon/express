import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const FerryTerminal = ({ ferryTerminal }) => {
  return (
    <tr>
      <td>{ferryTerminal.LocationDescription}</td>
      <td>{ferryTerminal.Region}</td>
      <td>{ferryTerminal.OperatedBy}</td>
      <td>
        <a
          href={ferryTerminal.Website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ferryTerminal.Website}
        </a>
      </td>
      <td>
        <a
          href={ferryTerminal.Twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ferryTerminal.Twitter}
        </a>
      </td>
      <td>{ferryTerminal.Open}</td>
      <td>{ferryTerminal.Latitude}</td>
      <td>{ferryTerminal.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${ferryTerminal.Latitude},${ferryTerminal.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const FerryTerminals = () => {
  const [data, setData] = useState({
    ferryTerminals: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { ferryterminals } = json;
        setData({
          ...data,
          ferryTerminals: ferryterminals,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.ferryTerminals || data.ferryTerminals.length === 0)
    return <Loading />;
  return (
    <>
      <h2>Ferry Terminals</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Location</th>
                <th>Region</th>
                <th>Operated By</th>
                <th>Website</th>
                <th>Twitter</th>
                <th>Open</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.ferryTerminals
                .sort((a, b) =>
                  a.LocationDescription.toLowerCase() <
                  b.LocationDescription.toLowerCase()
                    ? -1
                    : 1
                )
                .map((ferryTerminal) => (
                  <FerryTerminal
                    ferryTerminal={ferryTerminal}
                    key={ferryTerminal.Id}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default FerryTerminals;
