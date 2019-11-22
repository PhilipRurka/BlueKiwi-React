import Header from './Header';
import { connect } from 'react-redux';

const mapToStateToProps = ({ currentHistory }) => ({ currentHistory });

export default connect(
  mapToStateToProps
  ) ( Header);