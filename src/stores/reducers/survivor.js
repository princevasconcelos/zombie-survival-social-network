const STORE_SURVIVOR = 'STORE_SURVIVOR';

const INITIAL_STATE = {};

export const storeSurvivor = survivor => ({
  type: STORE_SURVIVOR,
  payload: survivor,
});

const survivorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_SURVIVOR:
      return action.payload;
    default:
      return state;
  }
};

export default survivorReducer;
