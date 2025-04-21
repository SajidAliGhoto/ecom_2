import React from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ProductDetails from './Pages/ProductDetailPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
function App() {
    React.useEffect(()=>{
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease-in-out',
            delay: 800,
            once: false,
         });
         AOS.refresh();     
    },[])

    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
            setOrderPopup(!orderPopup);
    }
    const [isLoggedIn, setLoggedIn] = React.useState(true);
    const [cartItems, setCartItems] = React.useState([]);
    const addToCart = (item) => {
        setCartItems((prevCartItems ) => {
            const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id);
            if(existingItem){
                return prevCartItems.map(cartItem => {
                    return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
                })
            }else{
                return [...prevCartItems, {...item,quantity: 1}];
            }
        })
        
    }
    const removeFromCart = (item) => {
        cartItems.length >0 && setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if(existingItem.quantity > 1){
            setCartItems(cartItems.map(cartItem => {
                return cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity -1} : cartItem
            }))
        }else
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    }
    const clearCart = () => {
        setCartItems([]);
    }
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
    }

    console.log(getTotalPrice);
   
    return (
        <>
        <Router>
        <Navbar 
            handleOrderPopup={handleOrderPopup}
            isLoggedIn={isLoggedIn}
        />
            <Routes>
                <Route path='/' element={<HomePage addToCart={addToCart}/>} />
                <Route path='/product/:id' element={<ProductDetails addToCart={addToCart}/>} />
                <Route path='/cart' 
                    element={<CartPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}
                    clearCart={clearCart} getTotalPrice={getTotalPrice}
                    />}
                />

                <Route path='/checkout' 
                    element={<CheckoutPage cartItems={cartItems} getTotalPrice={getTotalPrice}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    />}
                />

                <Route path='/products'
                        element={<ProductsPage
                        addToCart={addToCart}
                        />}
                />

            </Routes>
        
            </Router>
        </>
    )
}

export default App
