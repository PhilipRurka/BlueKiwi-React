import Pages from './Pages';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentPathname,
  productsList
}) => ({
  currentPathname,
  productsList
});

export default connect(
  mapToStateToProps
) (Pages);