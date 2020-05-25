import React, { useState, useEffect } from 'react';
import Data from './Data';
import Menu from './Menu';
import Footer from './Footer';
import Loading from './Loading';

const App = () => {
  const [settings, setSettings] = useState({
    error: false,
    loading: false,
    content: null,
  });
  const getGameData = () => {
    setSettings({ ...settings, loading: true });
    (async () => {
      const r = await fetch(`/api/data`);
      const t = await r.json();
      return t;
    })()
      .then((d) => setSettings({ ...settings, content: d, loading: false }))
      .catch(() => setSettings({ ...settings, error: true }));
  };
  useEffect(() => {
    getGameData();
    // eslint-disable-next-line
  }, []);
  if (settings.error || (settings.error && settings.content.message))
    return (
      <div className='page bg-dark d-flex justify-content-center align-items-center text-white'>
        Please try again later!
      </div>
    );
  if (settings.content === null || !settings.content) return <Loading />;
  return (
    <>
      <div className='page bg-dark'>
        <Menu />
        {settings.loading && <Loading />}
        <Data settings={settings} />
      </div>
      <Footer />
    </>
  );
};

export default App;
