import React from "react";

const ErrorMsg = ({ message }) => {
  return <span className="mt-2 badge-dot text-danger">{message}</span>;
};

export default ErrorMsg;
