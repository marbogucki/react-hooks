/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import {
  fetchTasksAction,
  fetchTasksSuccessAction,
  fetchTasksFailureAction,
} from './tasksActions';

const TasksState = ({ children }) => {
  const TasksInitialState = {
    tasks: [],
    loading: false,
    error: null,
  };

  const [state, tasksDispatch] = useReducer(TasksReducer, TasksInitialState);

  // Get Tasks
  const fetchTasks = async () => {
    tasksDispatch(fetchTasksAction());

    try {
      // eslint-disable-next-line no-undef
      const result = await axios.get(`${process.env.REACT_APP_URL_API}/tasks`);
      tasksDispatch(fetchTasksSuccessAction(result.data));
    } catch (error) {
      tasksDispatch(fetchTasksFailureAction(error));
    }
  };

  return (
    <TasksContext.Provider value={{ ...state, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksState.propTypes = {
  children: PropTypes.node,
};

export default TasksState;
