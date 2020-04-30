import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Event = ({ event }) => {
  return (
    <tr>
      <td>{event.RoadwayName}</td>
      <td>{event.Organization}</td>
      <td>{event.DirectionOfTravel}</td>
      <td>{event.Description}</td>
      <td>{event.LanesAffected}</td>
      <td className="text-uppercase">{event.EventType}</td>
      <td>{event.Comment}</td>
      <td>{moment.unix(event.Reported).format("LL")}</td>
      <td>{moment.unix(event.LastUpdated).format("LL")}</td>
      <td>{moment.unix(event.StartDate).format("LL")}</td>
      <td>{moment.unix(event.PlannedEndDate).format("LL")}</td>
      <td>{event.Latitude}</td>
      <td>{event.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${event.Latitude},${event.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const Events = () => {
  const [data, setData] = useState({
    events: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { events } = json;
        setData({
          ...data,
          events,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.events || data.events.length === 0) return <Loading />;
  return (
    <>
      <h2>Events</h2>
      <hr />
      <Row>
        <Col xs className="mb-3">
          <Table responsive bordered hover striped>
            <thead>
              <tr>
                <th>Roadway Name</th>
                <th>Organization</th>
                <th>Direction Of Travel</th>
                <th>Description</th>
                <th>Lanes Affected</th>
                <th>Event Type</th>
                <th>Comment</th>
                <th>Reported</th>
                <th>Last Updated</th>
                <th>Start Date</th>
                <th>Planned End Date</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Check Map</th>
              </tr>
            </thead>
            <tbody>
              {data.events
                .sort((a, b) =>
                  a.RoadwayName.toLowerCase() < b.RoadwayName.toLowerCase()
                    ? -1
                    : 1
                )
                .map((event) => (
                  <Event event={event} key={event.Id} />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Events;
