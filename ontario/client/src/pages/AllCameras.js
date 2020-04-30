import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Cameras from "../components/Cameras/Cameras";

const AllCameras = () => {
  const [data, setData] = useState({
    cameras: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const request = await fetch("/api/data");
        const json = await request.json();
        const { cameras } = json;
        setData({ ...data, cameras, loading: false });
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

export default AllCameras;
