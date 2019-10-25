import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { getExpenses } from '../../redux/BudgetApp/BudgetAppActions';

const mapDispatchToProps = {
  getExpenses,
};

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
