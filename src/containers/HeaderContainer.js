import Header from '../component/Header';

import { connect } from 'react-redux';
import { addToCart } from '../services/Actions/Action';

const mapTOStateProps = (state) => ({
  data: state.cartItem,
});
const mapToDispatchProps = (dispatch) => ({});

export default connect(mapTOStateProps, mapToDispatchProps)(Header);
// export default Home;
