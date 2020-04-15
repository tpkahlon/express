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
  if (!ideas || ideas.length === 0) return <p>Loading...</p>;
  return (
    <>
      <Listing list={ideas} />
    </>
  );
};

export default Ideas;
