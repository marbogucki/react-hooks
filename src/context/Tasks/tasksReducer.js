import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
} from './tasksTypes';

const TasksReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: [],
      };

    default:
      return state;
  }
};

export default TasksReducer;
