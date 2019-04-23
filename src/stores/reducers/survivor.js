const REQUEST_GET_SURVIVORS = 'REQUEST_GET_SURVIVORS';
const REQUEST_SURVIVOR_SUCCESS = 'REQUEST_SURVIVOR_SUCCESS';
const REQUEST_SURVIVOR_FAILED = 'REQUEST_SURVIVOR_FAILED';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export const requestGetSurvivors = () => ({
  type: REQUEST_GET_SURVIVORS,
});

export const requestSurvivorFailed = payload => ({
  type: REQUEST_SURVIVOR_FAILED,
  payload,
});

export const requestSurvivorSuccess = payload => ({
  type: REQUEST_SURVIVOR_SUCCESS,
  payload,
});

const survivorReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case REQUEST_GET_SURVIVORS:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SURVIVOR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REQUEST_SURVIVOR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default survivorReducer;
