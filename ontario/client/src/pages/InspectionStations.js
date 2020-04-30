import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const InspectionStation = ({ inspectionStation }) => {
  return (
    <tr>
      <td>{inspectionStation.Name}</td>
      <td>{inspectionStation.Highway}</td>
      <td>{inspectionStation.Direction}</td>
      <td>{inspectionStation.Location}</td>
      <td>{inspectionStation.ContactInformation}</td>
      <td>{inspectionStation.Region}</td>
      <td>{inspectionStation.Latitude}</td>
      <td>{inspectionStation.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${inspectionStation.Latitude},${inspectionStation.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const InspectionStations = () => {
  const [data, setData] = useState({
    inspectionStations: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { inspectionstations } = json;
        setData({
          ...data,
          inspectionStations: inspectionstations,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.inspectionStations || data.inspectionStations.length === 0)
    return <Loading />;
  return (
    <>
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Highway</th>
                <th>Direction</th>
                <th>Location</th>
                <th>Contact Information</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.inspectionStations
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((inspectionStation) => (
                  <InspectionStation
                    inspectionStation={inspectionStation}
                    key={inspectionStation.Name}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default InspectionStations;
