import React, { useState, useEffect } from "react";
import Listing from "../components/Listing";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const req = await fetch(`/api/ideas`);
        const json = await req.json();
        setIdeas(json);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, []);
  if (!ideas) return <Loading />;
  if (ideas.length === 0) return <NotFound />;
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Listing list={ideas} />
        </div>
      </div>
    </div>
  );
};

export default Ideas;
