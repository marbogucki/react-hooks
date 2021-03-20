import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  REMOVE_TASK,
  REMOVE_TASK_FAILUER,
  REMOVE_TASK_SUCCESS,
} from './tasksTypes';

const fetchTasksAction = () => ({
  type: FETCH_TASKS,
});

const fetchTasksSuccessAction = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

const fetchTasksFailureAction = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error: error.message },
});

const removeTaskAction = (taskId) => ({
  type: REMOVE_TASK,
  payload: { id: taskId },
});

const removeTaskSuccessAction = (taskId) => ({
  type: REMOVE_TASK_SUCCESS,
  payload: { id: taskId },
});

const removeTaskFailureAction = (error) => ({
  type: REMOVE_TASK_FAILUER,
  payload: { error: error.message },
});

export {
  fetchTasksAction,
  fetchTasksSuccessAction,
  fetchTasksFailureAction,
  removeTaskAction,
  removeTaskSuccessAction,
  removeTaskFailureAction,
};
