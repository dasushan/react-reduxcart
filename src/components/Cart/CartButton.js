import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

import { getTotalQuantity } from '../../store/cart-slice';

const CartButton = (props) => {

    const dispatch = useDispatch();
    const cartQunatity = useSelector(getTotalQuantity)
    const toggleCartHandler = () => {
        dispatch(uiActions.toggle())
    }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;