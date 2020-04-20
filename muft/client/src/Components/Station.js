import React from "react";
import moment from "moment";
import axios from "axios";
import ReactPlayer from "react-player";
import DeleteForm from "./DeleteForm";

const Station = ({ data, setData, handleToggle }) => {
  const handleLikes = () => {
    const likesObj = {
      likes:
        data.currentStation.likes === undefined
          ? 1
          : parseInt(data.currentStation.likes) + 1,
    };
    // const URL = `http://localhost:3001/stations/${data.currentStation._id}`;
    const URL = `/stations/${data.currentStation._id}`;
    axios
      .put(URL, likesObj)
      .then((res) => {
        const newData = res.data;
        const newDataIndex = data.stations.findIndex(
          (i) => i._id === newData._id
        );
        data.stations.splice(newDataIndex, 1, newData);
        setData({
          ...data,
          currentStation: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  const handleDislikes = () => {
    const dislikesObj = {
      dislikes:
        data.currentStation.dislikes === undefined
          ? 1
          : parseInt(data.currentStation.dislikes) + 1,
    };
    // const URL = `http://localhost:3001/stations/${data.currentStation._id}`;
    const URL = `/stations/${data.currentStation._id}`;
    axios
      .put(URL, dislikesObj)
      .then((res) => {
        const newData = res.data;
        const newDataIndex = data.stations.findIndex(
          (i) => i._id === newData._id
        );
        data.stations.splice(newDataIndex, 1, newData);
        setData({
          ...data,
          currentStation: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <>
        <div className="station">
          <div className="station__info">
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
        <div className="station">
          <div className="station__actions">
            <div
              className="station__actions-button"
              onClick={(e) => handleLikes(e)}
              name="likes"
            >
              <div>
                {data.currentStation.likes === undefined
                  ? 0
                  : data.currentStation.likes}
              </div>
              <div>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                <span className="sr-only">Likes</span>
              </div>
            </div>
            <div
              className="station__actions-button"
              onClick={(e) => handleDislikes(e)}
              name="dislikes"
            >
              <div>
                {data.currentStation.dislikes === undefined
                  ? 0
                  : data.currentStation.dislikes}
              </div>
              <div>
                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                <span className="sr-only">Dislikes</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div>
              <button onClick={handleToggle}>Edit</button>
            </div>
            <div>
              <DeleteForm data={data} setData={setData} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Station;
