import React from 'react';
import HabitTracker from '../components/Habits/HabitTracker';
import './Habits.css';

const Habits = () => {
  return (
    <div className="habits-page">
      <h1>Habit Tracker</h1>
      <HabitTracker />
    </div>
  );
};

export default Habits;