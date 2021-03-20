import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';
import { Spinner } from '../Spinner';
import { ViewState, getViewState } from './getviewState';

const ViewStateData = ({ state, data, errorMessage, children }) => {
  const displayViews = getViewState({ ...state, data });

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
  state: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
  }),
  data: PropTypes.array,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
};

export default ViewStateData;
