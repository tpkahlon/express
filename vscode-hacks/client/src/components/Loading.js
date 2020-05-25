import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center bg-dark'>
      <ReactLoading type='balls' color='#fff' height='5rem' width='5rem' />
    </div>
  );
};

export default Loading;
