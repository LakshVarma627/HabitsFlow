export const getHabitSuggestions = async (goals) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ suggestions: goals.map((goal) => `Start ${goal} daily`), message: 'Habit suggestions generated!' });
    }, 1000);
  });
};