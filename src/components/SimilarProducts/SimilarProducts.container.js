import SimilarProducts from './SimilarProducts';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  discoveriesList,
  currentHistory
}) => ({
  discoveriesList,
  currentHistory
});

export default connect(
  mapToStateToProps
) (SimilarProducts);