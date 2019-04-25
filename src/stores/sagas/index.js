import { all, takeLatest } from 'redux-saga/effects';

import { CHANGE_QUERY } from '../reducers/query';
import storeQuery from './query';

export default function* rootSaga() {
  yield all([takeLatest(CHANGE_QUERY, storeQuery)]);
}
