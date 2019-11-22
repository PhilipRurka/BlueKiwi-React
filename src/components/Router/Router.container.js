import Router from './Router';
import { connect } from 'react-redux';
import { updateHistory } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  updateHistory: (payload) => dispatch(updateHistory(payload))
});

export default connect(
  null,
  mapDispatchToProps
) (Router);