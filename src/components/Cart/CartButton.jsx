import classes from './CartButton.module.css';
// import { toggle } from '../../Stores';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Stores/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCart =()=>{
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
