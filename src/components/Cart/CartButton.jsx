import classes from './CartButton.module.css';
// import { toggle } from '../../Stores';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../Stores/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state =>state.cart.totalQuantity);


  const toggleCart =()=>{
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
