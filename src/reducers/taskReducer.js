import { todoConstants as tc } from '../constant/actionTypes';
const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case tc.ADD_TASK:
      return [...state, { ...action.payload }];
    case tc.UPDTAE_TASK:
    case tc.DELETE_TASK:
    default:
      return state;
  }
};
export default todoReducer;
