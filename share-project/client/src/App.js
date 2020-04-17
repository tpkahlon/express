import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Project from "./Components/Project";
import Projects from "./Components/Projects";
import AddForm from "./Components/AddForm";
import UpdateForm from "./Components/UpdateForm";
import NotFound from "./Components/NotFound";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    projects: [],
    currentProject: {},
    updateToggle: false,
  });
  const handleClick = (e, item) => {
    e.preventDefault();
    setData({ ...data, currentProject: item });
  };
  const handleLogoClick = (e) => {
    setData({ ...data, currentProject: {} });
  };
  const handleToggle = () => {
    setData({ ...data, updateToggle: !data.updateToggle });
  };
  useEffect(() => {
    // const URL = `http://localhost:3001/projects`;
    const URL = `/projects`;
    axios
      .get(URL)
      .then((res) =>
        setData({ ...data, projects: [...data.projects, ...res.data] })
      )
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Link to="/" onClick={handleLogoClick}>
              <h1>Share Projects</h1>
            </Link>
            <AddForm data={data} setData={setData} />
            <Project
              data={data}
              setData={setData}
              handleToggle={handleToggle}
            />
            <UpdateForm data={data} setData={setData} />
            <Projects data={data} handleClick={handleClick} />
          </div>
        </Route>
        <Route>
          <div className="container">
            <Link to="/">
              <h1>Share Projects</h1>
            </Link>
            <NotFound />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
