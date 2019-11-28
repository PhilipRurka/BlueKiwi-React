import DiscoveryOptionPage from './DiscoveryOptionPage';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentHistory,
  discoveriesList
}) => ({
  currentHistory,
  discoveriesList
});

export default connect(
  mapToStateToProps
) (DiscoveryOptionPage);