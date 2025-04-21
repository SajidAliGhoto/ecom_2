import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
const Cart = ({cartItems,addToCart,removeFromCart,clearCart}) => {

    const navigate = useNavigate();

    return (
        <div id="cart" className="dark:bg-gray-800 dark:text-white bg-black/30 backdrop-blur-md min-h-screen w-full pt-10 pb-10 fixed top-0 left-0 z-50">
            <div className="container flex flex-col items-center justify-center w-fit bg-white backdrop-blur-sm dark:bg-gray-800 p-3 rounded-lg shadow-lg">

                <div className=" text-center mb-10">
                    <div className="flex items-center justify-between p-2">
                        
                        <h1 className="text-black dark:text-white text-3xl font-bold">Your Cart</h1>
                        <IoCloseCircleOutline onClick={()=> navigate('/')} className="cursor-pointer text-2xl dark:text-white text-gray-500 hover:text-gray-800"/>
                    </div>
                    <p className="text-slate-400 text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi</p>
                </div> 
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 overflow-y-auto max-h-[65vh]"
                >
                    {/* Cart Items will be displayed here */}
                    { console.log(cartItems.length) }
                    {cartItems.length > 0 ? cartItems.map((item) => (
                        <div className="flex flex-col items-center justify-center gap-5">

                            <div key={item.id} className="flex items-center justify-center gap-5 border px-5 border-primary">
                                <img src={item.img} alt={item.title} className="w-20 h-20 rounded-full" />
                                <div className="flex flex-col items-center justify-between gap-5">
                                    <h1>{item.title}</h1>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                    <div className="flex items-center justify-between gap-5 p-3">
                                        <button onClick={()=>addToCart(item)}
                                            className="bg-green-500 text-white text-xl w-5 text-center rounded-full"
                                        >+</button>
                                        <button onClick={()=>removeFromCart(item)}
                                            className="bg-red-500 text-white text-xl w-5 text-center rounded-full"    
                                        >-</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                    : <div className="container flex flex-col items-center gap-5">
                        <h1>Cart is empty</h1>
                    </div>

                    }
                    
                </div>
                <div className="flex items-center justify-between gap-5 py-5">
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={()=> navigate('/')}>
                            Continue Shopping</button>
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={() => navigate('/checkout')}>
                        Checkout</button>
                        <button className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap'
                            onClick={() => clearCart()}>
                        Clear Cart</button>
                </div>
            </div>
        </div> 
           
    );
};
export default Cart;