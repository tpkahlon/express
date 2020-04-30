import React from "react";
import { GoHeart } from "react-icons/go";

const Loading = () => {
  return (
    <div className="page-default d-flex justify-content-center align-items-center">
      <div className="text-center" style={{ color: "#c8102e" }}>
        <GoHeart className="heart" size={80} />
      </div>
    </div>
  );
};

export default Loading;
