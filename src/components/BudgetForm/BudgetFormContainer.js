import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { getBudget } from '../../redux/BudgetApp/BudgetAppActions';

const mapDispatchToProps = {
  getBudget,
};

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
