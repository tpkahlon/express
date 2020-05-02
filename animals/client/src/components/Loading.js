import styles from '../App.module.css';
import React from 'react';

const Loading = ({ data }) => {
  return (
    <div
      className={`w-100 position-fixed d-flex justify-content-center align-items-center ${
        data.loading ? styles.loading : ''
      }`}
    >
      <p className="m-0 font-weight-bold">Loading...</p>
    </div>
  );
};

export default Loading;
