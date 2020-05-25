import React from 'react';
import ItemWithChildren from './ItemWithChildren';
import ItemWithoutChildren from './ItemWithoutChildren';

const Item = ({ index, source, title, settings, setSettings }) => {
  if (typeof source === 'object') {
    return (
      <ItemWithChildren
        index={index}
        source={source}
        title={title}
        settings={settings}
        setSettings={setSettings}
      />
    );
  }
  return (
    <ItemWithoutChildren
      index={index}
      source={source}
      title={title}
      settings={settings}
      setSettings={setSettings}
    />
  );
};

export default Item;
