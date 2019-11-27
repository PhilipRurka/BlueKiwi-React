import ProductList from './ProductList';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  productsList
}) => ({
  productsList
});

export default connect(
  mapToStateToProps
) (ProductList);