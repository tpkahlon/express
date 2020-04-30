import React from "react";
import LazyLoad from "react-lazyload";
import { Card, Image, Table, Button } from "react-bootstrap";

const GroupedCamera = ({ groupedCamera }) => {
  return (
    <Card className="overflow-hidden h-100 shadow">
      <Card.Body>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${groupedCamera.Latitude},${groupedCamera.Longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <Card.Title className="text-capitalize">
            {groupedCamera.RoadwayName}
          </Card.Title>
        </a>
        <Card.Text className="text-muted">
          {groupedCamera.RoadwayName} / {groupedCamera.Organization}
        </Card.Text>
        <LazyLoad height={340}>
          <div className="mb-3 bg-light shadow">
            <Image
              fluid
              src={groupedCamera.Views[0].Url}
              rounded
              className=" w-100"
            />
          </div>
        </LazyLoad>
        <Table responsive bordered hover striped className="m-0">
          <thead>
            <tr>
              <th>Direction Of Travel</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Check Map</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{groupedCamera.DirectionOfTravel}</td>
              <td>{groupedCamera.Latitude}</td>
              <td>{groupedCamera.Longitude}</td>
              <td>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https:www.google.com/maps/search/?api=1&query=${groupedCamera.Latitude},${groupedCamera.Longitude}`}
                  variant="outline-primary"
                  size="sm"
                >
                  Check Map
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default GroupedCamera;
