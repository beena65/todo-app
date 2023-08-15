import { todoConstants as tc } from '../constant/actionTypes';

export const addTask = (task) => ({
  type: tc.ADD_TASK,
  payload: task,
});

export const updateTask = () => ({
  type: tc.UPDTAE_TASK,
});

export const deleteTask = () => ({
  type: tc.DELETE_TASK,
});
