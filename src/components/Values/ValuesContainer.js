import { connect } from 'react-redux';
import Values from './Values';
import {
  getBudget,
  getСalculateTotalExpenses,
  getCalculateBalance,
} from '../../redux/BudgetApp/BudgetAppSelectors';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getСalculateTotalExpenses(state),
  balance: getCalculateBalance(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
