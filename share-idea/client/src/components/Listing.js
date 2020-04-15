import React from "react";
import { Link } from "react-router-dom";

const Listing = ({ list }) => {
  return (
    <>
      {list.map((idea, index) => (
        <div key={index}>
          <Link to={`/ideas/${idea.id}`}>
            <h3>{idea.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Listing;
