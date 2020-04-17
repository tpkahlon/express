import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project";
import Projects from "./Projects";
import AddForm from "./AddForm";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";

const App = () => {
  const [data, setData] = useState({ projects: [], currentProject: {} });
  const handleClick = (e, item) => {
    e.preventDefault();
    setData({ ...data, currentProject: item });
  };
  useEffect(() => {
    const URL = `http://localhost:3001/projects`;
    axios
      .get(URL)
      .then((res) =>
        setData({ ...data, projects: [...data.projects, ...res.data] })
      )
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>
            <a href="/">Share Projects</a>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <AddForm data={data} setData={setData} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Project data={data} />
          <DeleteForm
            data={data}
            setData={setData}
            project={data.currentProject}
          />
          <UpdateForm data={data} setData={setData} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Projects data={data} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
