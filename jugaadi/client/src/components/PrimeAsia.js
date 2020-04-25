import React, { useState, useEffect } from "react";
import Channel from "./Channel";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const PrimeAsia = () => {
  const [data, setData] = useState({
    videos: [],
    loading: false,
    error: false,
    errorContent: null,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      try {
        const req = await fetch(`/channels`);
        const json = await req.json();
        const parser = new DOMParser();
        const documentFour = parser.parseFromString(json.four, "text/html");
        const videos = documentFour.querySelectorAll(`a[href*="/watch?v="]`);
        const videosArray = Array.from(
          new Set(Array.from(videos).map((i) => i.getAttribute("href")))
        );
        setData({
          ...data,
          videos: videosArray,
          loading: false,
        });
      } catch (err) {
        setData({ ...data, error: true, loading: false });
      }
    })();
    // eslint-disable-next-line
  }, []);
  if (data.loading) return <Loading />;
  if (data.error) return <ErrorMessage />;
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {data.videos.map((i, index) => (
            <div className="col col-12 col-sm-6 col-md-4 mb-3">
              <Channel video={i} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrimeAsia;
