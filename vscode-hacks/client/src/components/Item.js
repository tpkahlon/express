import React from 'react';
import ItemWithChildren from './ItemWithChildren';
import ItemWithoutChildren from './ItemWithoutChildren';

const Item = ({ index, source, title }) => {
  if (typeof source === 'object') {
    return <ItemWithChildren index={index} source={source} title={title} />;
  }
  return <ItemWithoutChildren index={index} source={source} title={title} />;
};

export default Item;
