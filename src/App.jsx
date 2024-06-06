// import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
// import store from './Stores/store';

function App() {
  const CartisOpen = useSelector(state => state.ui.cartIsVisible)
  return (
      <Layout >
      {CartisOpen && <Cart />}
      <Products />
    </Layout>
    
  );
}

export default App;
