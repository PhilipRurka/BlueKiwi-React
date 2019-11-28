import DiscoveryOptionPage from './DiscoveryOptionPage';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentHistory
}) => ({
  currentHistory
});

export default connect(
  mapToStateToProps
) (DiscoveryOptionPage);