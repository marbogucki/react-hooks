import TasksContext from 'context/Tasks/tasksContext';
import React, { useContext, useEffect } from 'react';
import ViewStateData from 'components/shared/ViewStateData/ViewStateData';
import Task from '../Task/Task';

const TasksList = () => {
  const { loading, tasks, error, fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ViewStateData loading={loading} data={tasks} error={error}>
      {tasks && (
        <section id="tasks-list">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </section>
      )}
    </ViewStateData>
  );
};

export default TasksList;
