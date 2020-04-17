import React from "react";
import moment from "moment";

const Project = ({ data }) => {
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <>
        <h1>Name: {data.currentProject.name}</h1>
        <p>ID: {data.currentProject._id}</p>
        <p>Description: {data.currentProject.description}</p>
        <p>
          Created On: {moment(data.currentProject.createdOn).format(`LLLL`)}
        </p>
        <p>
          <a
            className="button"
            rel="noopener noreferrer"
            target="_blank"
            href={data.currentProject.url}
          >
            View Project
          </a>
        </p>
      </>
    );
  }
};

export default Project;
