import React from "react";
import axios from "axios";

const DeleteForm = ({ data, setData }) => {
  const handleClick = (e) => {
    const passKey = prompt(
      `Please enter the pass key. Whatsapp at 4164092721 to become a moderator!`
    );
    if (passKey && passKey.trim() !== "") {
      // const URL = `http://localhost:3001/stations/${data.currentStation._id}`;
      const URL = `/stations/${data.currentStation._id}/${passKey}`;
      axios
        .delete(URL, {
          _id: data.currentStation._id,
        })
        .then((res) => {
          if (res.data.error) {
            alert(`The pass key did not work. Please try again.`);
            return;
          }
          if (res.status === 200 && res.data.message) {
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
    } else {
      return;
    }
    e.preventDefault();
  };
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <button href="#" onClick={handleClick}>
        Delete
      </button>
    );
  }
};

export default DeleteForm;
