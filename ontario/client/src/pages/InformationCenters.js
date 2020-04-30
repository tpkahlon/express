import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const InformationCenter = ({ informationCenter }) => {
  return (
    <tr>
      <td>{informationCenter.Name}</td>
      <td>{informationCenter.Open}</td>
      <td>{informationCenter.Address}</td>
      <td>
        <a href={`tel:${informationCenter.PhoneNumber}`}>
          {informationCenter.PhoneNumber}
        </a>
      </td>
      <td>
        <a href={`mailto:${informationCenter.Email}`}>
          {informationCenter.Email}
        </a>
      </td>
      <td>{informationCenter.Region}</td>
      <td>{informationCenter.Latitude}</td>
      <td>{informationCenter.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${informationCenter.Latitude},${informationCenter.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const InformationCenters = () => {
  const [data, setData] = useState({
    informationCenter: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { informationcenter } = json;
        setData({
          ...data,
          informationCenter: informationcenter,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.informationCenter || data.informationCenter.length === 0)
    return <Loading />;
  return (
    <>
      <h2>Information Centers</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Open</th>
                <th>Address</th>
                <th>PhoneNumber</th>
                <th>Email</th>
                <th>Region</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.informationCenter
                .sort((a, b) =>
                  a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1
                )
                .map((informationCenter) => (
                  <InformationCenter
                    informationCenter={informationCenter}
                    key={informationCenter.Name}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default InformationCenters;
