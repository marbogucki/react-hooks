import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
} from './tasksTypes';

const fetchTasks = () => ({
  type: FETCH_TASKS,
});

const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: { error },
});

export { fetchTasks, fetchTasksSuccess, fetchTasksFailure };
