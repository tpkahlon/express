import React from "react";
import ReactPlayer from "react-player";

const Channel = ({ video }) => {
  console.log(video);
  return (
    <div className="w-100 rounded-lg overflow-hidden bg-secondary shadow-lg">
      <ReactPlayer
        controls={true}
        width="100%"
        url={`https://www.youtube.com${video}`}
      />
    </div>
  );
};

export default Channel;
