const FETCH_REQUEST = 'FETCH_REQUEST';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const fetchReports = () => ({
  type: FETCH_REQUEST,
});

const reportReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_REQUEST:
      return { loading: true };
    default:
      return state;
  }
};

export default reportReducer;
