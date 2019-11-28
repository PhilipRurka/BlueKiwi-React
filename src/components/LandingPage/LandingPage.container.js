import LandingPage from './LandingPage';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  productsList,
  discoveriesList,
  currentHistory
}) => ({
  productsList,
  discoveriesList,
  currentHistory
});

export default connect(
  mapToStateToProps
) (LandingPage);