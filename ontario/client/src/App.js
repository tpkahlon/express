import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import AllCameras from "./pages/AllCameras";
import About from "./pages/About";
import Alerts from "./pages/Alerts";
import RoundAbouts from "./pages/RoundAbouts";
import InspectionStations from "./pages/InspectionStations";
import TruckRestAreas from "./pages/TruckRestAreas";
import InformationCenters from "./pages/InformationCenters";
import HovLanes from "./pages/HovLanes";
import Loads from "./pages/Loads";
import Menu from "./components/Menu";
import None from "./pages/None";
import ScrollToTop from "./components/STT";

const App = () => {
  return (
    <div className="min-vh-100">
      <Container>
        <Row>
          <Col xs>
            <Router>
              <ScrollToTop />
              <Menu />
              <div className="mt-3" style={{ paddingTop: "3.5rem" }}>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/cameras" component={AllCameras} exact />
                  <Route path="/alerts" component={Alerts} exact />
                  <Route path="/loads" component={Loads} exact />
                  <Route path="/roundabouts" component={RoundAbouts} exact />
                  <Route
                    path="/inspectionstations"
                    component={InspectionStations}
                    exact
                  />
                  <Route
                    path="/truckrestareas"
                    component={TruckRestAreas}
                    exact
                  />
                  <Route
                    path="/informationcenter"
                    component={InformationCenters}
                    exact
                  />
                  <Route path="/hovlanes" component={HovLanes} exact />
                  <Route path="/about" component={About} exact />
                  <Route path="*" component={None} />
                </Switch>
              </div>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
