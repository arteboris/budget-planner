import { combineReducers } from 'redux';
import { Type } from './BudgetAppActions';

const budget = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.GET_BUDGET:
      return payload;
    default:
      return state;
  }
};

const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_EXPENSES:
      return [payload, ...state];
    case Type.DELETE_EXPENSE:
      return state.filter(expense => expense.id !== payload);
    default:
      return state;
  }
};

export const BudgetAppReducer = combineReducers({
  budget,
  expenses,
});
