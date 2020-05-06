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
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <ReactLoading type="bars" color="#488726" />
      </div>
    );
  if (data.error)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <p>Something happened, try again...</p>
      </div>
    );
  return (
    <Container fluid>
      <Channels data={data.content} />
    </Container>
  );
};

export default App;
