import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import { getAll, fetchFromAPI, getLoadingState } from '../../../redux/kitcheRedux';

const mapStateToProps = (state) => ({
  orders: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
