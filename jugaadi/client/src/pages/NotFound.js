import React from "react";
import Menu from "../components/Menu";

const NotFound = () => {
  return (
    <>
      <Menu />
      <div className="container mt-3">
        <div className="row">
          <p>No page found!</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
