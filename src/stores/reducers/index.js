import { combineReducers } from 'redux';

import user from './user';
import query from './query';
import survivors from './survivor';
import reports from './report';
import transaction from './transaction';

export default combineReducers({
  user,
  query,
  survivors,
  reports,
  transaction,
});
