import {
  FETCH_TASKS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  REMOVE_TASK,
  REMOVE_TASK_FAILUER,
  REMOVE_TASK_SUCCESS,
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

    case REMOVE_TASK:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };

    case REMOVE_TASK_FAILUER:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default TasksReducer;
