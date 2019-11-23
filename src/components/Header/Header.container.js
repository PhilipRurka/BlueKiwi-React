import Header from './Header';
import { connect } from 'react-redux';
import { openMobileMenu } from '../../redux/actions';

const mapToStateToProps = ({
  currentHistory,
  currentPathname
}) => ({
  currentHistory,
  currentPathname
});

const mapDispatchToProps = (dispatch) => ({
  openMobileMenu: (payload) => dispatch(openMobileMenu(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (Header);