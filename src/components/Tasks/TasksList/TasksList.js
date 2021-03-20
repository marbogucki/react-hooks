import TasksContext from 'context/Tasks/tasksContext';
import React, { Fragment, useContext, useEffect } from 'react';
import ViewStateData from 'components/shared/ViewStateData/ViewStateData';

const TasksList = () => {
  const { fetchTasks, tasks, ...state } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ViewStateData
      state={state}
      data={tasks}
      errorMessage="Error: Please try again"
    >
      {tasks && (
        <div>
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <h4>{task.textArea}</h4>
            </Fragment>
          ))}
        </div>
      )}
    </ViewStateData>
  );
};

export default TasksList;
