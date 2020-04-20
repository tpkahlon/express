import React, { useState } from "react";
import axios from "axios";

const AddForm = ({ data, setData }) => {
  const initialFormState = {
    name: "",
    url: "",
    description: "",
    country: "Canada",
  };
  const [fields, setFields] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const URL = `http://localhost:3001/stations`;
    const URL = `/stations`;
    const { name, url, description, country } = e.target.elements;
    if (
      name.value.trim() === "" ||
      url.value.trim() === "" ||
      description.value.trim() === "" ||
      country.value.trim() === ""
    ) {
      alert(`Please enter a name, url and a description of the Station.`);
      return;
    }
    axios
      .post(URL, {
        name: fields.name,
        url: fields.url,
        description: fields.description,
        country: fields.country,
      })
      .then((res) => {
        alert(
          `Station has been added! Moderator may remove it if the link does not work in future.`
        );
        const newData = res.data;
        const revisedData = data.stations.concat(newData);
        const sortedData = revisedData.sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        });
        setData({
          ...data,
          stations: sortedData,
        });
        setFields(initialFormState);
      })
      .catch((err) => console.log(err));
  };
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) {
    return (
      <>
        <form
          className={`form form--add ${data.addToggle ? "" : "hidden"}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={fields.name}
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
              value={fields.url}
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
              value={fields.description}
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
              className="custom-select"
              value={fields.country}
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
            <button type="submit">Add</button>
          </div>
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default AddForm;
