import DiscoveryList from './DiscoveryList';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  discoveriesList
}) => ({
  discoveriesList
});

export default connect(
  mapToStateToProps
) (DiscoveryList);