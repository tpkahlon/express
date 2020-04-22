import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="modal">
      <p>{error.error ? error.error.message : error.message}</p>
    </div>
  );
};

export default ErrorMessage;
