import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Channels from './Channels';
import { Container } from 'react-bootstrap';

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
      const t = await r.text();
      return t;
    })()
      .then((t) => {
        setData({ ...data, content: t, loading: false });
      })
      .catch((e) => setData({ ...data, error: true }));
    // eslint-disable-next-line
  }, []);
  if (data.loading)
    return (
      <div className="app">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <ReactLoading type="bars" color="#488726" />
        </div>
      </div>
    );
  if (data.error)
    return (
      <div className="app">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <p>Something happened, Try again...</p>
        </div>
      </div>
    );
  return (
    <div className="app">
      <Container fluid>
        <Channels html={data} />
      </Container>
    </div>
  );
};

export default App;
