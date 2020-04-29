import React from "react";
import LazyLoad from "react-lazyload";
import { Card, Image, Table } from "react-bootstrap";

const Camera = ({ camera }) => {
  return (
    <Card className="overflow-hidden h-100 shadow">
      <Card.Body>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${camera.Latitude},${camera.Longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <Card.Title className="text-capitalize">{camera.Name}</Card.Title>
        </a>
        <Card.Text className="text-muted">
          {camera.RoadwayName} / {camera.Organization}
        </Card.Text>
        <LazyLoad height={340}>
          <div className="mb-3">
            <Image fluid src={camera.Url} rounded className="shadow" />
          </div>
        </LazyLoad>
        <Table responsive bordered hover striped className="m-0">
          <thead>
            <tr>
              <td>Roadway</td>
              <td>Organization</td>
              <td>City</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{camera.RoadwayName}</td>
              <td>{camera.Organization}</td>
              <td>{camera.CityName}</td>
              <td>{camera.Description}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Camera;
