import React from 'react';
import TaskList from '../components/Tasks/TaskList';
import './Tasks.css';

const Tasks = () => {
  return (
    <div className="tasks-page">
      <h1>Task Management</h1>
      <TaskList />
    </div>
  );
};

export default Tasks;