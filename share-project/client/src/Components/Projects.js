import React from "react";

const Projects = ({ data, handleClick }) => {
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) {
    if (data.projects.length === 0) {
      return (
        <div className="row">
          <div className="column">
            <div className="card">
              <p>No projects listed.</p>
            </div>
          </div>
        </div>
      );
    } else {
      const sortedProjects = data.projects.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
      return (
        <div className="row">
          <div className="column">
            {sortedProjects.map((i) => {
              return (
                <div className="card" key={i._id}>
                  <div>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="/"
                      onClick={(e) => handleClick(e, i)}
                    >
                      {i.name}
                    </a>
                  </div>
                  <div>{i.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default Projects;
