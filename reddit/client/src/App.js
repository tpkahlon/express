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
  });
  const { content, l, e, after, before, url, count, keyword } = data;
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
  if (e) return <Default message='Error...' />;
  if (l) return <Default message='Loading...' />;
  return (
    <>
      <Keyword
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Content content={content} />
      {before && count !== 0 && (
        <button onClick={handlePrevious}>Previous</button>
      )}
      {after && <button onClick={handleNext}>Next</button>}
    </>
  );
};

export default App;
