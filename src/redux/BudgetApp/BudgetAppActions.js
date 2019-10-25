export const Type = {
  GET_BUDGET: 'GET_BUDGET',
  GET_EXPENSES: 'GET_EXPENSES',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const getBudget = budget => ({
  type: Type.GET_BUDGET,
  payload: budget,
});

export const getExpenses = expenses => ({
  type: Type.GET_EXPENSES,
  payload: expenses,
});

export const deleteExpense = expenses => ({
  type: Type.DELETE_EXPENSE,
  payload: expenses,
});
