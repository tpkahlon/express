import React from "react";
import axios from "axios";

const DeleteForm = ({ data, setData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // const URL = `http://localhost:3001/projects/${data.currentProject._id}`;
    const URL = `/projects/${data.currentProject._id}`;
    axios
      .delete(URL, {
        _id: data.currentProject._id,
      })
      .then((res) => {
        if (res.status === 200) {
          const remainingProjects = data.projects.filter(
            (i) => i._id !== data.currentProject._id
          );
          setData({
            ...data,
            currentProject: {},
            projects: remainingProjects,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const condition =
    Object.keys(data.currentProject).length === 0 &&
    data.currentProject.constructor === Object;
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (condition) return <></>;
  else {
    return <button onClick={handleClick}>Delete</button>;
  }
};

export default DeleteForm;
