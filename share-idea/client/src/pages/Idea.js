import React from "react";
import Listing from "../components/Listing";
import NotFound from "../pages/NotFound";
import data from "../data/data";

const Idea = ({ match }) => {
  const { id } = match.params;
  console.log(id);
  const idea = data.find((i) => i.id === parseInt(id));
  const otherIdeas = data.filter((i) => i.id !== parseInt(id));
  if (!idea) return <NotFound />;
  return (
    <>
      <h1>{idea.name}</h1>
      <hr />
      <h2>Other Ideas</h2>
      <Listing list={otherIdeas} />
    </>
  );
};

export default Idea;
