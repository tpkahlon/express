import React, { useState, useEffect } from 'react';
import Content from './Content';
import Keyword from './Keyword';
import Default from './Default';

const App = () => {
  const limit = 100;
  const [data, setData] = useState({
    keyword: 'askto',
    url: `/api/data/askto/${limit}`,
    content: null,
    e: false,
    l: false,
    count: 0,
    options: [],
  });
  const { e, after, before, url, keyword } = data;
  const handleNext = () => {
    setData({
      ...data,
      url: `/api/data/next/${keyword}/${limit}/${after}`,
      count: data.count + limit,
    });
  };
  const handlePrevious = () => {
    setData({
      ...data,
      url: `/api/data/prev/${keyword}/${limit}/${before}`,
      count: data.count - limit,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentKeyword = e.target.elements['keyword'].value.trim();
    setData({
      ...data,
      url: `/api/data/${currentKeyword}/${limit}`,
      count: 0,
    });
  };
  const getSearches = () => {
    (async () => {
      const r = await fetch(`/api/search/${keyword}`);
      const j = await r.json();
      return j;
    })()
      .then((d) => {
        setData({
          ...data,
          options: d.data.children.map((i) => i.data.display_name),
        });
      })
      .catch((e) => setData({ ...data, e: true }));
  };
  const getData = () => {
    setData({ ...data, l: true });
    (async () => {
      const r = await fetch(url);
      const j = await r.json();
      return j;
    })()
      .then((d) => {
        setData({
          ...data,
          l: false,
          content: d,
          after: d.data.after,
          before: d.data.children[0].data.id,
        });
      })
      .catch((e) => setData({ ...data, e: true }));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [after, before, url]);
  useEffect(() => {
    if (keyword.trim() !== '') {
      getSearches();
    } else {
      setData({ ...data, options: [] });
    }
    // eslint-disable-next-line
  }, [keyword]);
  if (e) return <Default message='Error...' />;
  return (
    <>
      <Keyword
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <Content data={data} />
    </>
  );
};

export default App;
