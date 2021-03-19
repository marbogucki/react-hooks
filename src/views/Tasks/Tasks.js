import React, { useContext } from 'react';
import TasksContext from 'context/Tasks/tasksContext';

const Tasks = () => {
  const tasksState = useContext(TasksContext);
  console.log(tasksState);

  return <div>Tasks</div>;
};

export { Tasks };
