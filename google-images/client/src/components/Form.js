import React from "react";

const Form = ({ data, handleSubmit, handleToggle, fields, handleChange }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter keyword..."
        required
        name="keyword"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      <button onClick={handleToggle}>Settings</button>
      <div className={data.isToggle ? "settings" : "settings hidden"}>
        <div>
          <div>
            <input
              id="realTime"
              name="timeFilter"
              value="realTime"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="realTime">
              <span className="label__text">Real Time</span>
            </label>
          </div>
          <div>
            <input
              id="pastSecond"
              name="timeFilter"
              value="pastSecond"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastSecond">
              <span className="label__text">Past Second</span>
            </label>
          </div>
          <div>
            <input
              id="pastMinute"
              name="timeFilter"
              value="pastMinute"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastMinute">
              <span className="label__text">Past Minute</span>
            </label>
          </div>
          <div>
            <input
              id="pastHour"
              name="timeFilter"
              value="pastHour"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastHour">
              <span className="label__text">Past Hour</span>
            </label>
          </div>
          <div>
            <input
              id="pastDay"
              name="timeFilter"
              value="pastDay"
              type="radio"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="pastDay">
              <span className="label__text">Past Day</span>
            </label>
          </div>
          <div>
            <input
              id="pastWeek"
              name="timeFilter"
              value="pastWeek"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastWeek">
              <span className="label__text">Past Week</span>
            </label>
          </div>
          <div>
            <input
              id="pastMonth"
              name="timeFilter"
              value="pastMonth"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastMonth">
              <span className="label__text">Past Month</span>
            </label>
          </div>
          <div>
            <input
              id="pastYear"
              name="timeFilter"
              value="pastYear"
              type="radio"
              onChange={handleChange}
            />
            <label htmlFor="pastYear">
              <span className="label__text">Past Year</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
