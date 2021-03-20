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
  removeTaskAction,
  removeTaskSuccessAction,
  removeTaskFailureAction,
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

  // Remove Task
  const removeTask = (taskId) => {
    tasksDispatch(removeTaskAction(taskId));

    try {
      axios.delete(
        // eslint-disable-next-line no-undef
        `${process.env.REACT_APP_URL_API}/tasks/${taskId}`
      );
      tasksDispatch(removeTaskSuccessAction(taskId));
    } catch (error) {
      tasksDispatch(removeTaskFailureAction(error));
    }
  };

  return (
    <TasksContext.Provider value={{ ...state, fetchTasks, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksState.propTypes = {
  children: PropTypes.node,
};

export default TasksState;
