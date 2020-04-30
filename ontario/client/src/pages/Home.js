import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcome to Ontario Services...</h2>
      <hr />
      <p>Please see the following services below:</p>
      <Row className="my-3">
        <Col xs>
          <ListGroup>
            <ListGroup.Item action as={Link} to="/alerts">
              Alerts
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/cameras">
              Cameras
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/carpoollots">
              Car Pool Lots
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/constructionprojects">
              Construction Projects
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/events">
              Events
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/ferryterminals">
              Ferry Terminals
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/groupedcameras">
              Grouped Cameras
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/hovlanes">
              HOV Lanes
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/informationcenter">
              Information Centers
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/inspectionstations">
              Inspection Stations
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/loads">
              Loads
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/roadconditions">
              Road Conditions
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/roundabouts">
              RoundAbouts
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/servicecentres">
              Service Centres
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/transithubs">
              Transit Hubs
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/truckrestareas">
              Truck Rest Areas
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Home;
