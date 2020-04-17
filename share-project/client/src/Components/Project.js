import React from "react";
import moment from "moment";
import DeleteForm from "./DeleteForm";

const Project = ({ data, setData, handleToggle }) => {
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <>
        <div className="row">
          <div className="column">
            <h1>Name: {data.currentProject.name}</h1>
            <p>Description: {data.currentProject.description}</p>
            <p>
              Created On: {moment(data.currentProject.createdOn).format(`LLLL`)}
            </p>
            <div className="buttons">
              <a
                className="button"
                rel="noopener noreferrer"
                target="_blank"
                href={data.currentProject.url}
              >
                View
              </a>
              <DeleteForm data={data} setData={setData} />
              <button onClick={handleToggle}>Update</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Project;
