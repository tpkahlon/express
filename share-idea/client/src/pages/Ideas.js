import React from "react";
import Listing from "../components/Listing";
import data from "../data/data";

const Ideas = () => {
  return (
    <>
      <Listing list={data} />
    </>
  );
};

export default Ideas;
