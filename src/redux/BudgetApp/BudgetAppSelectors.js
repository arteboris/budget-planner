export const getBudget = state => state.budget;

export const getСalculateTotalExpenses = state => {
  return state.expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const getCalculateBalance = state =>
  getBudget(state) - getСalculateTotalExpenses(state);

export const getExpenses = state => state.expenses;

// export const filterExpenses = (state) => {
//   return state.filter(expense => expense.id !== id);
// };
