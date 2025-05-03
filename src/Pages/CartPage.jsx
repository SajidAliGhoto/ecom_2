import React from 'react';
import Cart from '../components/Cart and Checkout/Cart.jsx';
const Checkout = ({onCheckout}) => {
    
    return (
        <>
         <Cart
                
                onCheckout={onCheckout}
                
            />
        </>
    );
}
export default Checkout;