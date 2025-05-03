import React from 'react';
import Cart from '../components/Cart and Checkout/Cart.jsx';
const Checkout = ({cartItems,addToCart,removeFromCart,onCheckout,clearCart,getTotalPrice}) => {
    
    return (
        <>
         <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                onCheckout={onCheckout}
                clearCart={clearCart}
                getTotalPrice={getTotalPrice}
            />
        </>
    );
}
export default Checkout;