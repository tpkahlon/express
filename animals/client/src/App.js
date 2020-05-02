import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import Animals from './components/Animals';
import { Navbar, Container, Button } from 'react-bootstrap';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';

const App = () => {
  const [data, setData] = useState({
    error: false,
    loading: false,
    animals: [],
    limit: 0,
  });
  const handleNext = (e) => {
    e.preventDefault();
    setData({ ...data, loading: true, limit: data.limit + 20 });
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setData({ ...data, loading: true, limit: data.limit - 20 });
  };
  const parseAnimal = () => {
    (async () => {
      const request = await fetch(`/api/animals/${data.limit}`);
      const json = await request.json();
      const parser = new DOMParser();
      const doc = parser.parseFromString(json, 'text/html');
      const animals = doc.querySelectorAll('.animal-row');
      const animalsInfo = Array.from(animals).map((i) => ({
        name: i.children[1].textContent,
        thumbnail: i.children[0].children[0].getAttribute('src'),
      }));
      return animalsInfo;
    })()
      .then((html) => {
        setData({ ...data, animals: html, loading: false });
      })
      .catch((err) => setData({ ...data, error: true }));
  };
  useEffect(() => {
    setData({ ...data, loading: true });
    parseAnimal();
    // eslint-disable-next-line
  }, [data.limit]);
  if (data.error) return <ErrorMessage />;
  if (data.loading) return <Loading />;
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Animals</Navbar.Brand>
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
      <Container className="mt-3">
        <Animals animals={data.animals} />
      </Container>
    </>
  );
};

export default App;
