import "./App.css";
import React, { useState } from "react";
import Data from "./Data";

const App = () => {
  const [data, setData] = useState({
    site: "",
    content: [],
    error: false,
    loading: false,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const URL = `/api/data/${data.site}`;
        const request = await fetch(URL);
        const json = await request.json();
        setData({ ...data, content: json, loading: false });
      } catch (err) {
        setData({ ...data, error: err });
      }
    })();
  };
  if (data.loading) return <div>Loading...</div>;
  if (data.error) return <div>Something happened, try again...</div>;
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Site"
          required
          name="site"
          value={data.site}
          onChange={handleChange}
        />
        <button type="submit">Check Site</button>
      </form>
      <Data data={data} />
    </div>
  );
};

export default App;
