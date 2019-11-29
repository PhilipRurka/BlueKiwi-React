import Product from './Product';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentHistory
}) => ({
  currentHistory
});

export default connect(
  mapToStateToProps
) (Product);