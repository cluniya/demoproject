// import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './Stores/ui-slice';
import Notification from './components/UI/Notification';
// import store from './Stores/store';
let isInitial = true;
function App() {
  const CartisOpen = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(()=>{
    const sendCartData = async ()=>{

      dispatch(uiActions.setNotification({
        status:'pending',
        title: 'sendinf...',
        message : 'sending cart data...'
      }))
      const response = await fetch('https://ecommerce-http-513d4-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
    })
    if (!response.ok) {
      throw new error('sending cart data failder');
    }
    // const responseData = await response.json();
    dispatch(uiActions.setNotification({
      status:'success',
      title: 'seccess...',
      message : 'send cart data successfully!'
    }))
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(uiActions.setNotification({
        status:'error',
        title: 'Error!',
        message : 'sending cart data Failed!'
      }))
    })
  },[cart,dispatch])
  return (
      <Layout >
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      {CartisOpen && <Cart />}
      <Products />
    </Layout>
    
  );
}

export default App;
