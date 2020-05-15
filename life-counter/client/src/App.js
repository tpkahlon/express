import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Data from './Data';
import Menu from './Menu';
import Footer from './Footer';

const App = () => {
  const [settings, setSettings] = useState({
    error: false,
    loading: false,
    content: null,
    page: 1,
  });
  const getGameData = () => {
    (async () => {
      const r = await fetch(`/api/data/${settings.page}`);
      const t = await r.text();
      return t;
    })()
      .then((d) => setSettings({ ...settings, content: d, loading: false }))
      .catch(() => setSettings({ ...settings, error: true }));
  };
  const handleNext = () => {
    setSettings({
      ...settings,
      loading: true,
      page: settings.page + 1,
    });
  };
  const handlePrevious = () => {
    setSettings({
      ...settings,
      loading: true,
      page: settings.page - 1,
    });
  };
  useEffect(() => {
    setSettings({ ...settings, loading: true });
    getGameData();
    // eslint-disable-next-line
  }, [settings.page]);
  if (settings.error || (settings.error && settings.content.message))
    return alert('Please try again later!');
  return (
    <div className='page bg-dark'>
      <Menu
        data={settings}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      {settings.loading && (
        <div className='loading'>
          <ReactLoading type='spokes' color='#fff' height='3rem' width='3rem' />
        </div>
      )}
      <Data data={settings.content} />
      <Footer />
    </div>
  );
};

export default App;
