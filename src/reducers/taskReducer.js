import { todoConstants as tc } from '../constant/actionTypes';
const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case tc.ADD_TASK:
      return [...state, { ...action.payload, completed: false }];

    case tc.UPDTAE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case tc.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
export default todoReducer;
