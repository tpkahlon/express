import React from "react";
import axios from "axios";

const UpdateForm = ({ data, setData }) => {
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const revisedCurrentProject = { ...data.currentProject, [name]: value };
    setData({ ...data, currentProject: revisedCurrentProject });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `http://localhost:3001/projects/${data.currentProject._id}`;
    // const URL = `/projects/${data.currentProject._id}`;
    const { name, url, description } = e.target.elements;
    if (
      name.value.trim() === "" ||
      url.value.trim() === "" ||
      description.value.trim() === ""
    ) {
      alert(
        `Please enter a name, url and a description to update the project.`
      );
      return;
    }
    axios
      .put(URL, {
        name: data.currentProject.name,
        url: data.currentProject.url,
        description: data.currentProject.description,
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
        alert(`Project has been updated!`);
      })
      .catch((err) => console.log(err));
  };
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return (
      <>
        <form
          className={`form-update ${data.updateToggle ? "" : "hidden"}`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={data.currentProject.name}
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
              value={data.currentProject.url}
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
              value={data.currentProject.description}
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Enter Project Description..."
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </>
    );
  }
};

export default UpdateForm;
