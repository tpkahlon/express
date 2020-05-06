import React from 'react';
import Channel from './Channel';
import { uniqBy } from 'lodash';

const Channels = ({ data }) => {
  const revisedData = uniqBy(data, 'name');
  return (
    <>
      {revisedData
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        .map((i, index) => (
          <Channel key={index} channel={i} />
        ))}
    </>
  );
};

export default Channels;
