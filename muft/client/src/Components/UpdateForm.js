import React from "react";
import axios from "axios";

const UpdateForm = ({ data, setData }) => {
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const revisedCurrentStation = { ...data.currentStation, [name]: value };
    setData({ ...data, currentStation: revisedCurrentStation });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const URL = `http://localhost:3001/stations/${data.currentStation._id}`;
    const URL = `/stations/${data.currentStation._id}`;
    const { name, url, description, country } = e.target.elements;
    if (
      name.value.trim() === "" ||
      url.value.trim() === "" ||
      description.value.trim() === "" ||
      country.value.trim() === ""
    ) {
      alert(
        `Please enter a name, url, country and a description to update the station.`
      );
      return;
    }
    axios
      .put(URL, {
        name: data.currentStation.name,
        url: data.currentStation.url,
        description: data.currentStation.description,
        country: data.currentStation.country,
      })
      .then((res) => {
        const newData = res.data;
        const newDataIndex = data.stations.findIndex(
          (i) => i._id === newData._id
        );
        data.stations.splice(newDataIndex, 1, newData);
        alert(`Station has been updated!`);
      })
      .catch((err) => console.log(err));
  };
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <>
        <form
          className={`form form--add ${data.updateToggle ? "" : "hidden"}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={data.currentStation.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter Station Name..."
              required
            />
          </div>
          <div>
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              value={data.currentStation.url}
              onChange={handleChange}
              type="url"
              name="url"
              placeholder="Enter Station Link..."
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={data.currentStation.description}
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Enter Station Description..."
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              value={data.currentStation.country}
              onChange={handleChange}
              type="select"
              name="country"
              required
            >
              {data.country &&
                data.country.map((i, index) => (
                  <option key={index} value={i.country}>
                    {i.country}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </>
    );
  }
};

export default UpdateForm;
