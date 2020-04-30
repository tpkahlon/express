import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [data, setData] = useState({
    services: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        setData({
          ...data,
          services: json,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.services || data.services.length === 0) return <Loading />;
  return (
    <>
      <h2>Welcome to Ontario Services...</h2>
      <hr />
      <p>Please see the following services below:</p>
      <Row className="my-3">
        <Col xs>
          <ListGroup>
            <ListGroup.Item action as={Link} to="/alerts">
              <div className="d-flex justify-content-between align-items-center">
                <span>Alerts</span>
                <Badge variant="primary">{data.services.alerts.length}</Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/cameras">
              <div className="d-flex justify-content-between align-items-center">
                <span>Cameras</span>
                <Badge variant="primary">{data.services.cameras.length}</Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/carpoollots">
              <div className="d-flex justify-content-between align-items-center">
                <span>Car Pool Lots</span>
                <Badge variant="primary">
                  {data.services.carpoollots.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/constructionprojects">
              <div className="d-flex justify-content-between align-items-center">
                <span>Construction Projects</span>
                <Badge variant="primary">
                  {data.services.constructionprojects.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/events">
              <div className="d-flex justify-content-between align-items-center">
                <span>Events</span>
                <Badge variant="primary">{data.services.events.length}</Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/ferryterminals">
              <div className="d-flex justify-content-between align-items-center">
                <span>Ferry Terminals</span>
                <Badge variant="primary">
                  {data.services.ferryterminals.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/groupedcameras">
              <div className="d-flex justify-content-between align-items-center">
                <span>Grouped Cameras</span>
                <Badge variant="primary">
                  {data.services.groupedcameras.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/hovlanes">
              <div className="d-flex justify-content-between align-items-center">
                <span>HOV Lanes</span>
                <Badge variant="primary">{data.services.hovlanes.length}</Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/informationcenter">
              <div className="d-flex justify-content-between align-items-center">
                <span>Information Centers</span>
                <Badge variant="primary">
                  {data.services.informationcenter.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/inspectionstations">
              <div className="d-flex justify-content-between align-items-center">
                <span>Inspection Stations</span>
                <Badge variant="primary">
                  {data.services.inspectionstations.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/loads">
              <div className="d-flex justify-content-between align-items-center">
                <span>Loads</span>
                <Badge variant="primary">{data.services.loads.length}</Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/roadconditions">
              <div className="d-flex justify-content-between align-items-center">
                <span> Road Conditions</span>
                <Badge variant="primary">
                  {data.services.roadconditions.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/roundabouts">
              <div className="d-flex justify-content-between align-items-center">
                <span>RoundAbouts</span>
                <Badge variant="primary">
                  {data.services.roundabouts.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/servicecentres">
              <div className="d-flex justify-content-between align-items-center">
                <span>Service Centres</span>
                <Badge variant="primary">
                  {data.services.servicecentres.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/transithubs">
              <div className="d-flex justify-content-between align-items-center">
                <span>Transit Hubs</span>
                <Badge variant="primary">
                  {data.services.transithub.length}
                </Badge>
              </div>
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/truckrestareas">
              <div className="d-flex justify-content-between align-items-center">
                <span>Truck Rest Areas</span>
                <Badge variant="primary">
                  {data.services.truckrestareas.length}
                </Badge>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Home;
