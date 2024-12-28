import React, { useState } from 'react';
import './HabitTracker.css';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), text: newHabit, completed: false }]);
      setNewHabit('');
    }
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="habit-tracker">
      <h2>Habits</h2>
      <div className="habit-input">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit"
        />
        <button onClick={addHabit}>Add</button>
      </div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className={habit.completed ? 'completed' : ''}>
            <span onClick={() => toggleHabit(habit.id)}>{habit.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;