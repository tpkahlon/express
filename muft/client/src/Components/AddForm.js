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
        <hr />
        <div className="row">
          <div className="col col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="name"
                  className="col col-12 col-sm-2 col-form-label col-form-label-sm"
                >
                  Name:
                </label>
                <div className="col col-12 col-sm-10">
                  <input
                    id="name"
                    className="form-control form-control-sm"
                    value={fields.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter Station Name..."
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="url"
                  className="col col-12 col-sm-2 col-form-label col-form-label-sm"
                >
                  URL:
                </label>
                <div className="col col-12 col-sm-10">
                  <input
                    id="url"
                    className="form-control form-control-sm"
                    value={fields.url}
                    onChange={handleChange}
                    type="url"
                    name="url"
                    placeholder="Enter Station Link..."
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="description"
                  className="col col-12 col-sm-2 col-form-label col-form-label-sm"
                >
                  Description:
                </label>
                <div className="col col-12 col-sm-10">
                  <input
                    id="description"
                    className="form-control form-control-sm"
                    value={fields.description}
                    onChange={handleChange}
                    type="text"
                    name="description"
                    placeholder="Enter Station Description..."
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="country"
                  className="col col-12 col-sm-2 col-form-label col-form-label-sm"
                >
                  Country:
                </label>
                <div className="col col-12 col-sm-10">
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
              </div>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default AddForm;
