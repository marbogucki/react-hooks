/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';

const TasksState = ({ children }) => {
  const TasksInitialState = {
    tasks: [],
    loading: false,
    error: null,
  };

  const [state, tasksDispatch] = useReducer(TasksReducer, TasksInitialState);

  return (
    <TasksContext.Provider value={{ ...state }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksState.propTypes = {
  children: PropTypes.node,
};

export default TasksState;
