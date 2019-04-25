import { put, delay, call } from 'redux-saga/effects';

import API from '../../services/api';

import { storeQuery, discartQuery } from '../reducers/query';

export default function* storeQueryMiddleware({ payload }) {
  yield delay(1000);
  const { query, data } = payload;
  const match = data.find(e => e.name === query);
  if (!match) return yield put(discartQuery());
  const id = match.location.split('/').slice(-1);
  const result = yield call(API.fetchSurvivor, id);
  return yield put(storeQuery(result));
}
