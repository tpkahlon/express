import React, { useState } from "react";
import axios from "axios";

const AddForm = ({ data, setData }) => {
  const initialFormState = { name: "", url: "", description: "" };
  const [fields, setFields] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `http://localhost:3001/projects`;
    const { name, url, description } = e.target.elements;
    if (
      name.value.trim() === "" ||
      url.value.trim() === "" ||
      description.value.trim() === ""
    ) {
      alert(`Please enter a name, url and a description of the project.`);
      return;
    }
    axios
      .post(URL, {
        name: fields.name,
        url: fields.url,
        description: fields.description,
      })
      .then((res) => {
        const newData = res.data;
        const revisedData = data.projects.concat(newData);
        const sortedData = revisedData.sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        });
        setData({
          ...data,
          projects: sortedData,
        });
        setFields(initialFormState);
      })
      .catch((err) => console.log(err));
  };
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={fields.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter Project Name..."
              required
            />
          </div>
          <div>
            <label htmlFor="url">URL:</label>
            <input
              value={fields.url}
              onChange={handleChange}
              type="url"
              name="url"
              placeholder="Enter Project Link..."
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              value={fields.description}
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Enter Project Description..."
              required
            />
          </div>
          <button type="submit">+ Add Project</button>
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default AddForm;
