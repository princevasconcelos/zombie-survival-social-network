const STORE_QUERY = 'STORE_QUERY';

const INITIAL_STATE = '';

export const storeQuery = payload => ({
  type: STORE_QUERY,
  payload,
});

const queryReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case STORE_QUERY:
      return payload;
    default:
      return state;
  }
};

export default queryReducer;
