import { combineReducers } from 'redux';
import todoReducer from './taskReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});
export default rootReducer;
