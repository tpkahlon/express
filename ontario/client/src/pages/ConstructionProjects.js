import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Table, Button } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const ConstructionProject = ({ constructionProject }) => {
  return (
    <tr>
      <td>{constructionProject.RoadwayName}</td>
      <td>{constructionProject.Organization}</td>
      <td>{constructionProject.DirectionOfTravel}</td>
      <td>{constructionProject.Description}</td>
      <td>{constructionProject.LanesAffected}</td>
      <td className="text-uppercase">{constructionProject.EventType}</td>
      <td>{constructionProject.Comment}</td>
      <td>{moment.unix(constructionProject.Reported).format("LL")}</td>
      <td>{moment.unix(constructionProject.LastUpdated).format("LL")}</td>
      <td>{moment.unix(constructionProject.StartDate).format("LL")}</td>
      <td>{moment.unix(constructionProject.PlannedEndDate).format("LL")}</td>
      <td>{constructionProject.Latitude}</td>
      <td>{constructionProject.Longitude}</td>
      <td>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/search/?api=1&query=${constructionProject.Latitude},${constructionProject.Longitude}`}
          variant="outline-primary"
          size="sm"
        >
          Check Map
        </Button>
      </td>
    </tr>
  );
};

const ConstructionProjects = () => {
  const [data, setData] = useState({
    constructionProjects: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { constructionprojects } = json;
        setData({
          ...data,
          constructionProjects: constructionprojects,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.constructionProjects || data.constructionProjects.length === 0)
    return <Loading />;
  return (
    <>
      <h2>Construction Projects</h2>
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
              {data.constructionProjects
                .sort((a, b) =>
                  a.RoadwayName.toLowerCase() < b.RoadwayName.toLowerCase()
                    ? -1
                    : 1
                )
                .map((constructionProject) => (
                  <ConstructionProject
                    constructionProject={constructionProject}
                    key={constructionProject.Id}
                  />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ConstructionProjects;
