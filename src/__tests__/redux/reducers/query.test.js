import queryReducer, {
  INITIAL_STATE,
  CHANGE_QUERY,
  REQUEST_QUERY_SUCCESS,
  REQUEST_QUERY_FAILED,
} from '../../../stores/reducers/query';

describe('Query reducer', () => {
  it('should return initial state', () => {
    expect(queryReducer(undefined, {})).toBe(INITIAL_STATE);
  });

  it('should handle CHANGE_QUERY', () => {
    expect(
      queryReducer(INITIAL_STATE, {
        type: CHANGE_QUERY,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      loading: true,
    });
  });

  it('should handle REQUEST_QUERY_SUCCESS', () => {
    const query = { name: 'nirvana' };
    expect(
      queryReducer(INITIAL_STATE, {
        type: REQUEST_QUERY_SUCCESS,
        payload: query,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      ...query,
    });
  });

  it('should handle REQUEST_QUERY_FAILED', () => {
    expect(
      queryReducer(INITIAL_STATE, {
        type: REQUEST_QUERY_FAILED,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: true,
    });
  });
});
