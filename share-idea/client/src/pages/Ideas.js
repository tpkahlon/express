import React, { useState, useEffect } from "react";
import Listing from "../components/Listing";

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
  if (!ideas) return <p>Loading...</p>;
  if (ideas.length === 0) return <p>No ideas found!</p>;
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
