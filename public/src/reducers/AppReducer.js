import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import UtilReducer from './UtilReducer';

const AppReducer = combineReducers({
  auth: AuthReducer,
  util: UtilReducer
});

export default AppReducer;
