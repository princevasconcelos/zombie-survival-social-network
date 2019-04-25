const STORE_LOCATION = 'STORE_LOCATION';
const STORE_REPORTED_SURVIVOR = 'STORE_REPORTED_SURVIVOR';
const STORE_ITEMS = 'STORE_ITEMS';

const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
const REQUEST_USER_FAILED = 'REQUEST_USER_FAILED';

const INITIAL_STATE = {
  data: {
    name: '',
    age: '',
    gender: 'M',
    lonlat: '',
    reports: [],
    items: [
      {
        quantity: '',
        item: {
          name: 'Water',
          points: 4,
        },
      },
      {
        quantity: '',
        item: {
          name: 'Food',
          points: 3,
        },
      },
      {
        quantity: '',
        item: {
          name: 'Medication',
          points: 2,
        },
      },
      {
        quantity: '',
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

export const storeItems = payload => ({
  type: STORE_ITEMS,
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

export const storeReportedSurvivor = payload => ({
  type: STORE_REPORTED_SURVIVOR,
  payload,
});

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case STORE_LOCATION:
      return { ...state, data: { ...state.data, lonlat: payload } };

    case STORE_ITEMS:
      return { ...state, data: { ...state.data, items: payload } };

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

    case STORE_REPORTED_SURVIVOR:
      return {
        ...state,
        data: { ...state.data, reports: state.data.reports.concat(action.payload) },
      };

    default:
      return state;
  }
};

export default userReducer;
