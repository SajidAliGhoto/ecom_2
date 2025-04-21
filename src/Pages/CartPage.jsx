import React from 'react';
import Cart from '../components/Cart and Checkout/Cart.jsx';
const Checkout = ({cartItems,addToCart,removeFromCart,onCheckout}) => {
    
    return (
        <>
         <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                onCheckout={onCheckout}
                
            />
        </>
    );
}
export default Checkout;