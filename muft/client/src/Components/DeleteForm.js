import React from "react";
import axios from "axios";

const DeleteForm = ({ data, setData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // const URL = `http://localhost:3001/stations/${data.currentStation._id}`;
    const URL = `/stations/${data.currentStation._id}`;
    axios
      .delete(URL, {
        _id: data.currentStation._id,
      })
      .then((res) => {
        if (res.status === 200) {
          const remainingStations = data.stations.filter(
            (i) => i._id !== data.currentStation._id
          );
          setData({
            ...data,
            currentStation: {},
            stations: remainingStations,
          });
        }
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
      <button href="#" className="btn btn-danger" onClick={handleClick}>
        Delete
      </button>
    );
  }
};

export default DeleteForm;
