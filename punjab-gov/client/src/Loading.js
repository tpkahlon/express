import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='loading'>
      <ReactLoading type='spokes' color='#fff' height='3rem' width='3rem' />
    </div>
  );
};

export default Loading;
