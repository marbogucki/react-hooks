import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/hook-form">HookForm</NavLink>
      </li>
      <li>
        <NavLink to="/tasks">Tasks</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
