const STORE_USER = 'STORE_USER';

const INITIAL_STATE = {
  name: '',
  age: '',
  gender: 'M',
  items: {
    water: '',
    food: '',
    medication: '',
    ammunition: '',
  },
};

export const storeUser = payload => ({
  type: STORE_USER,
  payload,
});

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case STORE_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
