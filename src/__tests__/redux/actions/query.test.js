import {
  CHANGE_QUERY,
  REQUEST_QUERY_SUCCESS,
  REQUEST_QUERY_FAILED,
  saveQuery,
  storeQuery,
  discartQuery,
} from '../../../stores/reducers/query';

describe('Query actions', () => {
  it('should create an action when query changes', () => {
    const text = 'pizza';
    const expectedAction = {
      type: CHANGE_QUERY,
      payload: text,
    };

    expect(saveQuery(text)).toEqual(expectedAction);
  });

  it('should create an action when request query success', () => {
    const text = 'query found';
    const expectedAction = {
      type: REQUEST_QUERY_SUCCESS,
      payload: text,
    };

    expect(storeQuery(text)).toEqual(expectedAction);
  });

  it('should create an action when request query failure', () => {
    const expectedAction = {
      type: REQUEST_QUERY_FAILED,
    };

    expect(discartQuery()).toEqual(expectedAction);
  });
});
