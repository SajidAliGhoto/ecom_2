import React from 'react';
import Cart from '../components/Cart and Checkout/Cart.jsx';
const Checkout = ({cartItems,addToCart,removeFromCart,onCheckout,clearCart}) => {
    
    return (
        <>
         <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                onCheckout={onCheckout}
                clearCart={clearCart}
                
            />
        </>
    );
}
export default Checkout;