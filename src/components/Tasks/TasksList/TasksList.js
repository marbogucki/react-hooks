import TasksContext from 'context/Tasks/tasksContext';
import React, { Fragment, useContext, useEffect } from 'react';
import ViewStateData from 'components/shared/ViewStateData/ViewStateData';

const TasksList = () => {
  const { loading, tasks, error, fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ViewStateData loading={loading} data={tasks} error={error}>
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
