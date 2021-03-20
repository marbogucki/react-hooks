export const ViewState = {
  LOADING: 'loading',
  FAILURE: 'failure',
  DATA: 'data',
};

const isLoading = (state) => state.loading;
const hasError = (state) => state.error;
const hasData = (state) => state.data.length > 0;

const getViewState = (state) => {
  if (isLoading(state)) {
    return ViewState.LOADING;
  }

  if (hasError(state)) {
    return ViewState.FAILURE;
  }

  if (hasData(state)) {
    return ViewState.DATA;
  }
};

export default getViewState;
