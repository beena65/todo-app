import { combineReducers } from 'redux';
import todoReducer from './taskReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});
export default rootReducer;
