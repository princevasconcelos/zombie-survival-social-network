import { combineReducers } from 'redux';

import user from './user';
import query from './query';
import survivor from './survivor';
import report from './report';

export default combineReducers({
  user,
  query,
  survivor,
  report,
});
