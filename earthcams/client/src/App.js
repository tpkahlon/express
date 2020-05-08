import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Channels from './Channels';
import { Container, Navbar, Button } from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState({
    limit: 0,
    content: [],
    error: false,
    loading: false,
  });
  const handleNext = (e) => {
    e.preventDefault();
    setData({ ...data, loading: true, limit: data.limit + 50 });
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setData({ ...data, loading: true, limit: data.limit - 50 });
  };
  const makeCall = () => {
    (async () => {
      const r = await fetch(`/api/data/${data.limit}`);
      const t = await r.json();
      return t;
    })()
      .then((t) => {
        setData({ ...data, content: t, loading: false });
      })
      .catch((err) => setData({ ...data, error: true }));
  };
  useEffect(() => {
    setData({ ...data, loading: true });
    makeCall();
    // eslint-disable-next-line
  }, [data.limit]);
  if (data.error)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <p>Something happened, Try again...</p>
      </div>
    );
  return (
    <>
      <Navbar bg="light" collapse="xs" fixed="top" className="shadow-lg">
        <Navbar.Brand>CAMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <div className="ml-auto">
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
            <Button
              variant="primary"
              onClick={handlePrevious}
              className={`ml-2 ${data.limit === 0 ? styles.hidden : ''}`}
            >
              Previous
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div style={{ paddingTop: '3.5rem' }}>
        {data.loading && (
          <div
            className={`d-flex justify-content-center align-items-center ${
              data.loading ? styles.loading : ''
            }`}
          >
            <ReactLoading type="bars" color="#488726" />
          </div>
        )}
        <Container className="my-3">
          <div className="text-white">
            <p>Total CAMS: {data.content.fullcount}</p>
            {data.limit !== 0 && (
              <p>
                You are watching CAM {data.limit}-{data.limit + 50} out of&nbsp;
                {Number(data.content.fullcount)}.
              </p>
            )}
          </div>
          <Channels data={data} />
        </Container>
      </div>
    </>
  );
};

export default App;
