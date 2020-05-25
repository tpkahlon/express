import './App.scss';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import Content from './components/Content';

const App = () => {
  const [settings, setSettings] = useState({
    error: false,
    loading: false,
    content: null,
  });
  useEffect(() => {
    setSettings({ ...settings, loading: true });
    (async () => {
      const r = await fetch(`/api/data`);
      const j = await r.json();
      return j;
    })()
      .then((d) => setSettings({ ...settings, content: d, loading: false }))
      .catch(() => setSettings({ ...settings, error: true }));
    // eslint-disable-next-line
  }, []);
  const { error, loading, content } = settings;
  if (loading || content === null) return <Loading />;
  if (error) return <ErrorMessage />;
  return <Content content={content} />;
};

export default App;
