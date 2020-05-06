import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Channels from './Channels';

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
    return (
      <div className="page">
        <ReactLoading type="bars" color="#488726" />
      </div>
    );
  if (data.error)
    return (
      <div className="page">
        <p>Something happened, try again...</p>
      </div>
    );
  return (
    <>
      <div className="app">
        <Channels data={data.content} />
      </div>
    </>
  );
};

export default App;
