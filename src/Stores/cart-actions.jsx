import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"


export const fetchCartData=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response = await fetch('https://ecommerce-http-513d4-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new error("fetch data failed!")
            }
            const data = await response.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData))
        } catch (error) {
            dispatch(uiActions.setNotification({
                status:'error',
                title: 'Error!',
                message : 'fetching cart data Failed!'
              }))
        }

    }
}

export const sendCartData = (cart)=>{
    return async(dispatch)=>{
        dispatch(uiActions.setNotification({
            status:'pending',
            title: 'sendinf...',
            message : 'sending cart data...'
          }))

          const sendRequest = async()=>{
            const response = await fetch('https://ecommerce-http-513d4-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify(cart),
          })
          if (!response.ok) {
            throw new error('sending cart data failder');
          }
          }
          try {
            dispatch(uiActions.setNotification({
                status:'success',
                title: 'seccess...',
                message : 'send cart data successfully!'
            }))
            await sendRequest();
          } catch (error) {
            dispatch(uiActions.setNotification({
                status:'error',
                title: 'Error!',
                message : 'sending cart data Failed!'
              }))
          }


          
          
    }
}
