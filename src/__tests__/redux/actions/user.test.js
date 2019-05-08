import {
  STORE_LOCATION,
  STORE_REPORTED_SURVIVOR,
  STORE_ITEMS,
  storeLocation,
  storeItems,
  storeReportedSurvivor,
  REQUEST_CREATE_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED,
  requestCreateUser,
  requestUserFailed,
  requestUserSuccess,
} from '../../../stores/reducers/user';

describe('User actions', () => {
  it('should create an action when request create user', () => {
    const expectedAction = {
      type: REQUEST_CREATE_USER,
    };

    expect(requestCreateUser()).toEqual(expectedAction);
  });

  it('should create an action when request create user success', () => {
    const userData = {};
    const expectedAction = {
      type: REQUEST_USER_SUCCESS,
      payload: userData,
    };

    expect(requestUserSuccess(userData)).toEqual(expectedAction);
  });

  it('should create an action on request create user failure', () => {
    const error = 'Error on create user';
    const expectedAction = {
      type: REQUEST_USER_FAILED,
      payload: error,
    };

    expect(requestUserFailed(error)).toEqual(expectedAction);
  });

  it('should create an action when request store user location', () => {
    const userLocation = 'POINT (x y)';
    const expectedAction = {
      type: STORE_LOCATION,
      payload: userLocation,
    };

    expect(storeLocation(userLocation)).toEqual(expectedAction);
  });

  it('should create an action when request store user items', () => {
    const userItems = [];
    const expectedAction = {
      type: STORE_ITEMS,
      payload: userItems,
    };

    expect(storeItems(userItems)).toEqual(expectedAction);
  });

  it('should create an action on request store reported survivor', () => {
    const reportedSurvivorId = '';
    const expectedAction = {
      type: STORE_REPORTED_SURVIVOR,
      payload: reportedSurvivorId,
    };

    expect(storeReportedSurvivor(reportedSurvivorId)).toEqual(expectedAction);
  });
});
