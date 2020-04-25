import React from "react";
import ReactPlayer from "react-player";

const Channel = ({ video }) => {
  return (
    <ReactPlayer
      youtubeConfig={{ preload: true }}
      url={`https://www.youtube.com${video}`}
      className="w-100 rounded-lg overflow-hidden bg-dark shadow-lg"
    />
  );
};

export default Channel;
