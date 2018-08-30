import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

const AppReducer = combineReducers({
  auth: AuthReducer
});

export default AppReducer;
