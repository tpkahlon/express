import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [keyword, setKeyword] = useState({ keyword: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyword({ ...keyword, [name]: value });
  };
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
    </form>
  );
};

export default Form;
