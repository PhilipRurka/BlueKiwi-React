import Pages from './Pages';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  currentPathname
}) => ({
  currentPathname
});

export default connect(
  mapToStateToProps
) (Pages);