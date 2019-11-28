import BreadCrums from './BreadCrums';
import { connect } from 'react-redux';
import { openMobileMenu } from '../../redux/actions';

const mapToStateToProps = ({
  productsList,
  discoveriesList
}) => ({
  productsList,
  discoveriesList
});

const mapDispatchToProps = (dispatch) => ({
  openMobileMenu: (payload) => dispatch(openMobileMenu(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (BreadCrums);