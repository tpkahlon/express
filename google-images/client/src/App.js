import React, { useState } from "react";
import Images from "./components/Images";
import Loading from "./components/Loading";
import Form from "./components/Form";
import ErrorMessage from "./components/ErrorMessage";
import "./App.scss";

const App = () => {
  const [data, setData] = useState({
    images: [],
    loading: false,
    error: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children.keyword.value.trim() === "") {
      alert(`Please enter a keyword to search.`);
      e.target.reset();
      return;
    }
    handleImages(e.target.children.keyword.value);
    e.target.reset();
  };
  const handleImages = (keyword) => {
    setData({ ...data, loading: true });
    const getImages = async () => {
      try {
        const URL = `/images/${keyword}`;
        const request = await fetch(URL);
        const json = await request.json();
        return json;
      } catch (err) {
        setData({ ...data, error: err, loading: false });
      }
    };
    getImages()
      .then((response) => {
        if (response.error) {
          setData({ ...data, error: response, loading: false });
          return;
        }
        setData({
          ...data,
          images: response,
          loading: false,
        });
      })
      .catch((err) => setData({ ...data, error: err }));
  };
  if (data.loading) return <Loading />;
  if (data.error) return <ErrorMessage error={data.error} />;
  if (data.images)
    return (
      <>
        <Form handleSubmit={handleSubmit} />
        <Images data={data} setData={setData} />
      </>
    );
  else return <></>;
};

export default App;
