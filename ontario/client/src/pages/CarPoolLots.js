import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const CarPoolLot = ({ carPoolLot }) => {
  return (
    <tr>
      <td>{carPoolLot.LocationDescription}</td>
      <td>{carPoolLot.Highway}</td>
      <td>{carPoolLot.Interchange}</td>
      <td>{carPoolLot.EnterLotFrom}</td>
      <td>{carPoolLot.ParkingSpaces}</td>
      <td>{carPoolLot.AccessibleSpaces}</td>
      <td>{carPoolLot.Bike}</td>
      <td>{carPoolLot.Lights}</td>
      <td>{carPoolLot.Transit}</td>
      <td>{carPoolLot.Region}</td>
      <td>{carPoolLot.Latitude}</td>
      <td>{carPoolLot.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${carPoolLot.Latitude},${carPoolLot.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const CarPoolLots = () => {
  const [data, setData] = useState({
    carPoolLots: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { carpoollots } = json;
        setData({
          ...data,
          carPoolLots: carpoollots,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.carPoolLots || data.carPoolLots.length === 0) return <Loading />;
  return (
    <>
      <h2>Car Pool Lots</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Location</th>
                <th>Highway</th>
                <th>Interchange</th>
                <th>Enter Lot From</th>
                <th>Parking Spaces</th>
                <th>Accessible Spaces</th>
                <th>Bike</th>
                <th>Lights</th>
                <th>Transit</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.carPoolLots
                .sort((a, b) =>
                  a.LocationDescription.toLowerCase() <
                  b.LocationDescription.toLowerCase()
                    ? -1
                    : 1
                )
                .map((carPoolLot) => (
                  <CarPoolLot carPoolLot={carPoolLot} key={carPoolLot.Id} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default CarPoolLots;
