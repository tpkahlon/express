import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Cameras from "../components/Cameras";

const Home = () => {
  const [data, setData] = useState({
    cameras: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/cameras");
        const json = await request.json();
        setData({ ...data, cameras: json, loading: false });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.error) return <ErrorMessage />;
  if (!data.cameras || data.cameras.length === 0) return <Loading />;
  return <Cameras cameras={data.cameras} />;
};

export default Home;
