import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Station from "./Components/Station";
import Stations from "./Components/Stations";
import AddForm from "./Components/AddForm";
import UpdateForm from "./Components/UpdateForm";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import "./App.scss";

const App = () => {
  const [data, setData] = useState({
    stations: [],
    country: [],
    currentStation: {},
    updateToggle: false,
    addToggle: false,
  });
  const handleClick = (e, item) => {
    e.preventDefault();
    setData({ ...data, currentStation: item });
  };
  const handleLogoClick = (e) => {
    setData({ ...data, currentStation: {} });
  };
  const handleToggle = () => {
    setData({ ...data, updateToggle: !data.updateToggle });
  };
  const handleAddToggle = () => {
    setData({ ...data, addToggle: !data.addToggle });
  };
  useEffect(() => {
    let URL1 = `/stations`;
    // const URL1 = `http://localhost:3001/stations`;
    let URL2 = `https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json`;
    axios
      .all([axios.get(URL1), axios.get(URL2)])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          setData({
            ...data,
            stations: [...data.stations, ...firstResponse.data],
            country: secondResponse.data,
          });
        })
      )
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <div className="header">
                <div>
                  <Link
                    className="header__title"
                    to="/"
                    onClick={handleLogoClick}
                  >
                    <h1>Muft</h1>
                  </Link>
                  <button
                    className={
                      Object.keys(data.currentStation).length === 0
                        ? ""
                        : "hidden"
                    }
                    onClick={handleAddToggle}
                  >
                    + Add Station
                  </button>
                </div>
                <AddForm data={data} setData={setData} />
                <Station
                  data={data}
                  setData={setData}
                  handleToggle={handleToggle}
                />
                <UpdateForm data={data} setData={setData} />
                <Stations data={data} handleClick={handleClick} />
              </div>
            </Route>
            <Route>
              <div className="header">
                <Link to="/" className="text-decoration-none">
                  <h1>Muft</h1>
                </Link>
                <NotFound />
              </div>
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
};

export default App;
