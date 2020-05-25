import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <ReactLoading type='balls' color='#000' height='3rem' width='3rem' />
    </div>
  );
};

export default Loading;
