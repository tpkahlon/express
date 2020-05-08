import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Channels from './Channels';
import { Container, Image } from 'react-bootstrap';

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
      .catch((e) => setData({ ...data, error: true }));
    // eslint-disable-next-line
  }, []);
  if (data.loading)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <ReactLoading type="bars" color="#488726" />
      </div>
    );
  if (data.error)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <p>Something happened, Try again...</p>
      </div>
    );
  return (
    <Container className="my-3">
      <div className="text-center">
        <Image
          className="mb-3"
          fluid
          src="http://beta.ajitjalandhar.com/images/mainpage.png"
        />
      </div>
      <Channels html={data} />
    </Container>
  );
};

export default App;
