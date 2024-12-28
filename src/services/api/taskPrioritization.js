export const prioritizeTasks = async (tasks) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ prioritizedTasks: tasks.sort(), message: 'Tasks prioritized successfully!' });
    }, 1000);
  });
};