import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const ServiceCentre = ({ serviceCentre }) => {
  return (
    <tr>
      <td>{serviceCentre.Name}</td>
      <td>{serviceCentre.Roadway}</td>
      <td>{serviceCentre.CommercialParking}</td>
      <td>{serviceCentre.AccessVia}</td>
      <td>{serviceCentre.FoodServices}</td>
      <td>{serviceCentre.Amenities}</td>
      <td>{serviceCentre.FuelProvider}</td>
      <td>
        <a
          href={serviceCentre.Website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {serviceCentre.Website}
        </a>
      </td>
      <td>{serviceCentre.Region}</td>
      <td>{serviceCentre.Latitude}</td>
      <td>{serviceCentre.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${serviceCentre.Latitude},${serviceCentre.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const ServiceCentres = () => {
  const [data, setData] = useState({
    serviceCentres: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { servicecentres } = json;
        setData({
          ...data,
          serviceCentres: servicecentres,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.serviceCentres || data.serviceCentres.length === 0)
    return <Loading />;
  return (
    <>
      <h2>Service Centres</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roadway</th>
                <th>Commercial Parking</th>
                <th>Access Via</th>
                <th>Food Services</th>
                <th>Amenities</th>
                <th>Fuel Provider</th>
                <th>Website</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.serviceCentres
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((serviceCentre) => (
                  <ServiceCentre
                    serviceCentre={serviceCentre}
                    key={serviceCentre.Id}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ServiceCentres;
