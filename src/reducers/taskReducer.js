import { todoConstants as tc } from '../constant/actionTypes';
const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case tc.ADD_TASK:
    case tc.UPDTAE_TASK:
    case tc.DELETE_TASK:
    default:
      return state;
  }
};
export default todoReducer;