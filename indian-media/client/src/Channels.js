import React from 'react';
import Channel from './Channel';

const Channels = ({ data }) => {
  return (
    <>
      {data.map((i, index) => (
        <Channel key={index} channel={i} />
      ))}
    </>
  );
};

export default Channels;
