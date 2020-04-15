import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ideas from "./pages/Ideas";
import Idea from "./pages/Idea";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/ideas" component={Ideas} exact />
        <Route path="/ideas/:id" component={Idea} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
