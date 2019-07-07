import { combineReducers } from 'redux';
import errorReducer from './error';
import authReducer from './auth';
import routeReducer from './route';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  route: routeReducer
});