const STORE_LOCATION = 'STORE_LOCATION';

const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
const REQUEST_USER_FAILED = 'REQUEST_USER_FAILED';

const INITIAL_STATE = {
  data: {
    name: '',
    age: '',
    gender: 'M',
    lonlat: '',
    items: [
      {
        quantity: 0,
        item: {
          name: 'Water',
          points: 4,
        },
      },
      {
        quantity: 0,
        item: {
          name: 'Food',
          points: 3,
        },
      },
      {
        quantity: 0,
        item: {
          name: 'Medication',
          points: 2,
        },
      },
      {
        quantity: 0,
        item: {
          name: 'Ammunition',
          points: 1,
        },
      },
    ],
  },
  loading: false,
  error: null,
};

export const storeLocation = payload => ({
  type: STORE_LOCATION,
  payload,
});

export const requestCreateUser = () => ({
  type: REQUEST_CREATE_USER,
});

export const requestUserFailed = payload => ({
  type: REQUEST_USER_FAILED,
  payload,
});

export const requestUserSuccess = payload => ({
  type: REQUEST_USER_SUCCESS,
  payload,
});

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case STORE_LOCATION:
      return { ...state, data: { ...state.data, lonlat: payload } };
    case REQUEST_CREATE_USER:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...payload },
      };
    case REQUEST_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
