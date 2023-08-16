import { todoConstants as tc } from '../constant/actionTypes';

export const addTask = (task) => ({
  type: tc.ADD_TASK,
  payload: task,
});

export const updateTask = (taskId) => ({
  type: tc.UPDTAE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: tc.DELETE_TASK,
  payload: taskId,
});
