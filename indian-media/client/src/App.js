import React, { useState, useEffect } from 'react';
import Data from './Channels';

const App = () => {
  const [data, setData] = useState({
    content: [],
    error: false,
    loading: false,
  });
  useEffect(() => {
    setData({ ...data, loading: true });
    (async () => {
      const r = await fetch(`/api/data`);
      const t = await r.json();
      return t;
    })()
      .then((t) => {
        setData({ ...data, content: t, loading: false });
      })
      .catch((e) => setData({ ...data, error: e }));
    // eslint-disable-next-line
  }, []);
  if (data.loading || !data.content || data.content.length === 0)
    return <div>Loading...</div>;
  if (data.error) return <div>Something happened, try again...</div>;
  return <Data data={data.content} />;
};

export default App;
