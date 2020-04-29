import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Alerts from "./pages/Alerts";
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
                  <Route path="/alerts" component={Alerts} exact />
                  <Route path="/loads" component={Loads} exact />
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
