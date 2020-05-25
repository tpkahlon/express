import React from 'react';
import { Toast } from 'react-bootstrap';
import { MdDoneAll } from 'react-icons/md';

const Notification = ({ settings, setSettings }) => {
  const { show } = settings;
  return (
    <div className='notification'>
      <Toast
        className='notification__toast'
        onClose={() => setSettings({ ...settings, show: false })}
        show={show}
        delay={1000}
        autohide
      >
        <Toast.Header>
          <div className='d-flex align-items-center'>
            <MdDoneAll />
            <p className='m-0 ml-2 mr-5'>
              <strong className='mr-auto'>Success</strong>
            </p>
          </div>
        </Toast.Header>
        <Toast.Body>
          <p className='m-0'>Text copied successfully!</p>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Notification;
