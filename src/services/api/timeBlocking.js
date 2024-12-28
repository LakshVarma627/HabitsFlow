export const createTimeBlock = async (tasks) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ schedule: tasks, message: 'Time block created successfully!' });
    }, 1000);
  });
};