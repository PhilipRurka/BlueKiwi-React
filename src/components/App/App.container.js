import App from './App';
import { connect } from 'react-redux';
import { updateLists } from '../../redux/actions';

const mapToStateToProps = ({
  productsList
}) => ({
  productsList
});

const mapDispatchToProps = (dispatch) => ({
  updateLists: (payload) => dispatch(updateLists(payload))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (App);