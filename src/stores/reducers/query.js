export const CHANGE_QUERY = 'CHANGE_QUERY';

const REQUEST_QUERY_SUCCESS = 'REQUEST_QUERY_SUCCESS';
const REQUEST_QUERY_FAILED = 'REQUEST_QUERY_FAILED';

const INITIAL_STATE = {
  name: '',
  loading: false,
  error: false,
};

export const saveQuery = payload => ({
  type: CHANGE_QUERY,
  payload,
});

export const storeQuery = payload => ({
  type: REQUEST_QUERY_SUCCESS,
  payload,
});

export const discartQuery = () => ({
  type: REQUEST_QUERY_FAILED,
});

const queryReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_QUERY:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_QUERY_SUCCESS:
      return { ...state, loading: false, ...payload };
    case REQUEST_QUERY_FAILED:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default queryReducer;
