import Home from '../component/Home';

import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../services/Actions/Action';

const mapTOStateProps = (state) => ({
  data: state.cartItem,
});
const mapToDispatchProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapTOStateProps, mapToDispatchProps)(Home);
// export default Home;
