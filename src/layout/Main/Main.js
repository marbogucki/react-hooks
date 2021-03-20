import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
const About = lazy(() => import('views/About'));
const Home = lazy(() => import('views/Home'));
const Tasks = lazy(() => import('views/Tasks'));
const NotFound = lazy(() => import('views/NotFound'));
import TasksState from 'context/Tasks/tasksState';
import { Spinner } from 'components/shared';

const Main = () => {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/tasks">
            <TasksState>
              <Tasks />
            </TasksState>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
