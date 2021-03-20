import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message = 'Something went wrong' }) => {
  return <div>{message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
