import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import AllCameras from "./pages/AllCameras";
import AllGroupedCameras from "./pages/AllGroupedCameras";
import About from "./pages/About";
import Alerts from "./pages/Alerts";
import RoundAbouts from "./pages/RoundAbouts";
import InspectionStations from "./pages/InspectionStations";
import TruckRestAreas from "./pages/TruckRestAreas";
import InformationCenters from "./pages/InformationCenters";
import HovLanes from "./pages/HovLanes";
import ServiceCentres from "./pages/ServiceCentres";
import Events from "./pages/Events";
import FerryTerminals from "./pages/FerryTerminals";
import CarPoolLots from "./pages/CarPoolLots";
import TransitHubs from "./pages/TransitHubs";
import RoadConditions from "./pages/RoadConditions";
import ConstructionProjects from "./pages/ConstructionProjects";
// import GroupedCameras from "./pages/GroupedCameras";
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
              <div style={{ paddingTop: "4.5rem" }}>
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
                  <Route path="/transithubs" component={TransitHubs} exact />
                  <Route
                    path="/informationcenter"
                    component={InformationCenters}
                    exact
                  />
                  <Route path="/hovlanes" component={HovLanes} exact />
                  <Route
                    path="/servicecentres"
                    component={ServiceCentres}
                    exact
                  />
                  <Route path="/events" component={Events} exact />
                  <Route
                    path="/ferryterminals"
                    component={FerryTerminals}
                    exact
                  />
                  <Route
                    path="/roadconditions"
                    component={RoadConditions}
                    exact
                  />
                  <Route
                    path="/constructionprojects"
                    component={ConstructionProjects}
                    exact
                  />
                  <Route
                    path="/groupedcameras"
                    component={AllGroupedCameras}
                    exact
                  />
                  <Route path="/carpoollots" component={CarPoolLots} exact />
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
