import Pages from './Pages';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentPathname,
  productsList,
  discoveriesList,
  currentHistory
}) => ({
  currentPathname,
  productsList,
  discoveriesList,
  currentHistory
});

export default connect(
  mapToStateToProps
) (Pages);