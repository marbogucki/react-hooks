import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
} from './tasksTypes';

const TasksReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_TASKS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload.tasks,
      };

    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: [],
        error: payload.error,
      };

    default:
      return state;
  }
};

export default TasksReducer;
