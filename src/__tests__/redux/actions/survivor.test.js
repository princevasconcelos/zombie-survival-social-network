import {
  requestGetSurvivors,
  requestSurvivorFailed,
  requestSurvivorSuccess,
  REQUEST_GET_SURVIVORS,
  REQUEST_SURVIVOR_SUCCESS,
  REQUEST_SURVIVOR_FAILED,
} from '../../../stores/reducers/survivor';

// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'

// In Redux, action creators are functions which return plain objects.
// When testing action creators, we want to test whether the correct
// action creator was called and also whether the right action was returned.

describe('Survivor actions', () => {
  it('should create an action when request survivors', () => {
    const expectedAction = {
      type: REQUEST_GET_SURVIVORS,
    };

    expect(requestGetSurvivors()).toEqual(expectedAction);
  });

  it('should create an action when request success', () => {
    const data = [];
    const expectedAction = {
      type: REQUEST_SURVIVOR_SUCCESS,
      payload: data,
    };

    expect(requestSurvivorSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action when request failure', () => {
    const expectedAction = {
      type: REQUEST_SURVIVOR_FAILED,
    };

    expect(requestSurvivorFailed()).toEqual(expectedAction);
  });
});
