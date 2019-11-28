import BreadCrums from './BreadCrums';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentHistory,
  productsList,
  discoveriesList
}) => ({
  currentHistory,
  productsList,
  discoveriesList
});

export default connect(
  mapToStateToProps
) (BreadCrums);