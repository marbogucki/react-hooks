import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';
import { Spinner } from '../Spinner';
import { ViewState, getViewState } from './getviewState';

const ViewStateData = ({ loading, data, error, errorMessage, children }) => {
  const displayViews = getViewState({ loading, data, error });

  switch (displayViews) {
    case ViewState.LOADING:
      return <Spinner />;

    case ViewState.FAILURE:
      return <ErrorMessage message={errorMessage} />;

    case ViewState.DATA:
      return children;

    default:
      return <p>No data</p>;
  }
};

ViewStateData.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
};

export default ViewStateData;
