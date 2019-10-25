import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import { getExpenses } from '../../redux/BudgetApp/BudgetAppSelectors';
import { deleteExpense } from '../../redux/BudgetApp/BudgetAppActions';

const mapStateToProps = state => ({
  items: getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
