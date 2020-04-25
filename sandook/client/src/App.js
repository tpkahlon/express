import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import JaanMahal from "./pages/JaanMahal";
import MahalVlogs from "./pages/MahalVlogs";
import PunjabiVlogger from "./pages/PunjabiVlogger";
import PrimeAsia from "./pages/PrimeAsia";
import JusReign from "./pages/JusReign";
import AKTV from "./pages/AKTV";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/jaanmahal" component={JaanMahal} exact />
        <Route path="/mahalvlogs" component={MahalVlogs} exact />
        <Route path="/punjabivlogger" component={PunjabiVlogger} exact />
        <Route path="/primeasia" component={PrimeAsia} exact />
        <Route path="/jusreign" component={JusReign} exact />
        <Route path="/aktv" component={AKTV} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};
//.

export default App;
