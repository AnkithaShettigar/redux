import Home from '../component/Home';

import { connect } from 'react-redux';
import { addToCart } from '../services/Actions/Action';

const mapTOStateProps = (state) => ({});
const mapToDispatchProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapTOStateProps, mapToDispatchProps)(Home);
// export default Home;
