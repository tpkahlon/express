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
      return <p>No Stations listed.</p>;
    } else {
      const sortedStations = data.stations
        .filter((i) => i.country === filterCountry.country)
        .sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        });
      return (
        <>
          <div className="filter">
            <label htmlFor="country">Filter stations:</label>
            <select
              id="country"
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
          {sortedStations.length !== 0 ? (
            <div className="cards">
              {sortedStations.map((i) => {
                return (
                  <a
                    className="card"
                    key={i._id}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/"
                    onClick={(e) => handleClick(e, i)}
                  >
                    <div>{i.name}</div>
                    <div>{i.description.substring(0, 100) + `...`}</div>
                    <div>{i.country}</div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div>
              <p>No stations found in selected country.</p>
            </div>
          )}
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default Stations;
