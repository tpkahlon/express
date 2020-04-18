import React, { useState } from "react";

const Stations = ({ data, handleClick }) => {
  const initialFormState = {
    country: "Canada",
  };
  const [filterCountry, setFilterCountry] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterCountry({ ...filterCountry, [name]: value });
  };
  const condition =
    Object.keys(data.currentStation).length === 0 &&
    data.currentStation.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) {
    if (data.stations.length === 0) {
      return (
        <div className="row">
          <div className="col col-12">
            <p>No Stations listed.</p>
          </div>
        </div>
      );
    } else {
      const sortedStations = data.stations
        .filter((i) => i.country === filterCountry.country)
        .sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        });
      return (
        <>
          <div className="row">
            <div className="col col-12">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="country">Filter stations:</label>
                <select
                  id="country"
                  className="custom-select w-50"
                  value={filterCountry.country}
                  onChange={handleChange}
                  type="select"
                  name="country"
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
          </div>
          <div className="row">
            <div className="col col-12">
              <div className="list-group">
                {sortedStations.length !== 0 ? (
                  sortedStations.map((i) => {
                    return (
                      <a
                        key={i._id}
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/"
                        onClick={(e) => handleClick(e, i)}
                        className="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{i.name}</h5>
                        </div>
                        <p>{i.description}</p>
                        <small className="text-muted">{i.country}</small>
                      </a>
                    );
                  })
                ) : (
                  <p>No stations found in selected country.</p>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default Stations;
