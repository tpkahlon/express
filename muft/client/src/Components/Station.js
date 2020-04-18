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
      <>
        <div>
          <div className="info">
            <div>{data.currentStation.name}</div>
            <div>{moment(data.currentStation.createdOn).format(`LLLL`)}</div>
            <div>{data.currentStation.country}</div>
          </div>
          <div>{data.currentStation.description}</div>
        </div>
        <div>
          <ReactPlayer
            width="auto"
            height="auto"
            controls={true}
            url={data.currentStation.url}
            fileConfig={{ forceAudio: true }}
          />
        </div>
        <div>
          <button onClick={handleToggle}>Edit</button>
          <DeleteForm data={data} setData={setData} />
        </div>
      </>
    );
  }
};

export default Station;
