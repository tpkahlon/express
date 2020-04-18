import React from "react";
import moment from "moment";
import ReactPlayer from "react-player";
import DeleteForm from "./DeleteForm";

const Station = ({ data, setData, handleToggle }) => {
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <div className="row">
        <div className="col col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.currentStation.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {moment(data.currentStation.createdOn).format(`LLLL`)}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                {data.currentStation.country}
              </h6>
              <p className="card-text">{data.currentStation.description}</p>
              <div className="mb-3">
                <ReactPlayer
                  width="auto"
                  height="auto"
                  controls={true}
                  url={data.currentStation.url}
                  fileConfig={{ forceAudio: true }}
                />
              </div>
              <div className="btn-group">
                <DeleteForm data={data} setData={setData} />
                <button className="btn btn-warning" onClick={handleToggle}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Station;
