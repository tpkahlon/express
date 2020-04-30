import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Table } from "react-bootstrap";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const createMarkup = (markup) => {
  return { __html: markup };
};

const Alert = ({ alert }) => {
  return (
    <Table responsive bordered hover striped>
      <thead>
        <tr>
          <th>Message</th>
          <th>Critical</th>
          <th>Notes</th>
          <th>Send Alerts</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Regions Affected</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{alert.Message ? alert.Message : "No message mentioned"}</td>
          <td>{alert.HighImportance ? "Yes" : "No"}</td>
          <td>
            {alert.Notes ? (
              <div dangerouslySetInnerHTML={createMarkup(alert.Notes)} />
            ) : (
              "No notes mentioned"
            )}
          </td>
          <td>{alert.SendNotification ? "Yes" : "No"}</td>
          <td>{moment.unix(alert.StartTime).format("LLLL")}</td>
          <td>{moment.unix(alert.EndTime).format("LLLL")}</td>
          <td>
            {alert.Regions.length > 1
              ? alert.Regions.join(", ")
              : alert.Regions.length === 1
              ? alert.Regions
              : alert.Regions.length === 0
              ? "No regions mentioned"
              : "No regions mentioned"}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

const Alerts = () => {
  const [data, setData] = useState({
    alerts: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { alerts } = json;
        setData({ ...data, alerts, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.alerts || data.alerts.length === 0) return <Loading />;
  return (
    <>
      <h2>Alerts</h2>
      <hr />
      <Row>
        {data.alerts
          .sort((a, b) => (a.StartTime > b.StartTime ? -1 : 1))
          .map((alert) => (
            <Col xs className="mb-3" key={alert.Id}>
              <Alert alert={alert} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Alerts;
