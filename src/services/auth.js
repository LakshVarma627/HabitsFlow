export const login = async (email, password) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, email, name: 'John Doe' });
    }, 1000);
  });
};

export const logout = async () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};