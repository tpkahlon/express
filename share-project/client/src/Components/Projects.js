import React from "react";

const Projects = ({ data, handleClick }) => {
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  const sortedProjects = data.projects.sort((a, b) => {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
  });
  if (condition)
    return (
      <>
        {sortedProjects.map((i) => {
          return (
            <div key={i._id}>
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
      </>
    );
  else {
    return <></>;
  }
};

export default Projects;
