import { combineReducers } from 'redux';
import userReducer from './user';
import itemReducer from './item';

const rootReducer = combineReducers({ users: userReducer, items: itemReducer });
export default rootReducer;
