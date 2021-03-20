import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import TasksContext from 'context/Tasks/tasksContext';

const Task = ({ task: { id, text, date, textArea } }) => {
  const { removeTask } = useContext(TasksContext);

  const handleRemoveTask = (taskId) => () => {
    removeTask(taskId);
  };

  return (
    <Fragment>
      <h2>{text}</h2>
      <h5>{date}</h5>
      <p>{textArea}</p>
      <button onClick={handleRemoveTask(id)}>Delete</button>
      <hr />
    </Fragment>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.date,
    textArea: PropTypes.string,
  }),
};

export default Task;
