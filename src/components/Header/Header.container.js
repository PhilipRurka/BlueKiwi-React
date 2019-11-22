import Header from './Header';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentHistory,
  currentPathname
}) => ({
  currentHistory,
  currentPathname
});

export default connect(
  mapToStateToProps
  ) ( Header);