import React from 'react';
import Checkout from "../components/Cart and Checkout/Checkout";

const CheckoutPage = ({ cartItems,getTotalPrice, removeFromCart}) => {
    console.log(getTotalPrice);
    return (
        <>
           <Checkout
                cartItems={cartItems}
                getTotalPrice={getTotalPrice}
                removeFromCart={removeFromCart}
                
            />
           
        </>
    );
    }
export default CheckoutPage;