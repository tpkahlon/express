import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import Six from "./pages/Six";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/one" component={One} exact />
        <Route path="/two" component={Two} exact />
        <Route path="/three" component={Three} exact />
        <Route path="/four" component={Four} exact />
        <Route path="/five" component={Five} exact />
        <Route path="/six" component={Six} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
//.

export default App;
