import React from 'react';
import ReactPlayer from 'react-player';

const Channel = ({ channel }) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(channel.url, 'text/html');
  const items = dom.querySelector('.item-section')
    ? dom.querySelector('.item-section')
    : null;
  if (items === null) {
    return <></>;
  }
  const channelURL = items.children[0].querySelector('.yt-lockup-title')
    ? items.children[0].querySelector('.yt-lockup-title').children[0]
        .attributes[0].value
    : null;
  const channelThumbnail = items.children[0].querySelector('.yt-thumb-simple')
    ? items.children[0].querySelector('.yt-thumb-simple').children[0]
        .attributes[1].value
    : null;
  if (channelURL === null || channelThumbnail === null) {
    return <></>;
  }
  return (
    <div className="channel">
      {
        <ReactPlayer
          url={`https://www.youtube.com${channelURL}`}
          light={channelThumbnail}
          className="channel__thumb"
          controls={true}
        />
      }
      <div className="channel__name">{channel.name}</div>
    </div>
  );
};

export default Channel;
