import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BudgetAppReducer } from './BudgetApp/BudgetAppReducer';

const store = createStore(BudgetAppReducer, devToolsEnhancer());

export default store;
