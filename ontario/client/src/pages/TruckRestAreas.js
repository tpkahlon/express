import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const TruckRestArea = ({ truckRestArea }) => {
  return (
    <tr>
      <td>{truckRestArea.Name}</td>
      <td>{truckRestArea.Roadway}</td>
      <td>{truckRestArea.Direction}</td>
      <td>{truckRestArea.Location}</td>
      <td>{truckRestArea.Type}</td>
      <td>{truckRestArea.Open}</td>
      <td>{truckRestArea.TruckParking}</td>
      <td>{truckRestArea.Lavatory}</td>
      <td>{truckRestArea.Accessible}</td>
      <td>{truckRestArea.FoodServices}</td>
      <td>{truckRestArea.Fuel}</td>
      <td>{truckRestArea.Comments}</td>
      <td>{truckRestArea.Region}</td>
      <td>{truckRestArea.Latitude}</td>
      <td>{truckRestArea.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          //href={`https://www.google.com/maps/search/?api=1&query=${truckRestArea.Latitude},${truckRestArea.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const TruckRestAreas = () => {
  const [data, setData] = useState({
    truckRestAreas: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { truckrestareas } = json;
        setData({
          ...data,
          truckRestAreas: truckrestareas,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.truckRestAreas || data.truckRestAreas.length === 0)
    return <Loading />;
  return (
    <>
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <td>Name</td>
                <td>Roadway</td>
                <td>Direction</td>
                <td>Location</td>
                <td>Type</td>
                <td>Open</td>
                <td>Truck Parking</td>
                <td>Lavatory</td>
                <td>Accessible</td>
                <td>Food Services</td>
                <td>Fuel</td>
                <td>Comments</td>
                <td>Region</td>
                <td>Latitude</td>
                <td>Longitude</td>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.truckRestAreas
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((truckRestArea) => (
                  <TruckRestArea
                    truckRestArea={truckRestArea}
                    key={truckRestArea.Name}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default TruckRestAreas;
