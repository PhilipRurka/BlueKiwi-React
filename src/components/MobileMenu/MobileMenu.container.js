import MobileMenu from './MobileMenu';
import { connect } from 'react-redux';
import { openMobileMenu } from '../../redux/actions';

const mapToStateToProps = ({
  currentHistory,
  currentPathname,
  showingMobileMenu
}) => ({
  currentHistory,
  currentPathname,
  showingMobileMenu
});

const mapDispatchToProps = (dispatch) => ({
  openMobileMenu: (payload) => dispatch(openMobileMenu(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (MobileMenu);