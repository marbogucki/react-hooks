import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main, Navbar } from './layout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
};

export default App;
