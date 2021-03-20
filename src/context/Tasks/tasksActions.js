import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
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

export { fetchTasksAction, fetchTasksSuccessAction, fetchTasksFailureAction };
