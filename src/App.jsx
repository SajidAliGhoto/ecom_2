import React from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import ProductDetails from './Pages/ProductDetailPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import ForgotPassword from './components/Auth/ForgotPassword.jsx'
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';
import { CartProvider } from './components/Cart and Checkout/CartContext.jsx';
import { AuthProvider } from './components/Auth/AuthContext.jsx';
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

   
    return (
        <>
        <AuthProvider>
        <CartProvider>
        <Navbar />
            <Routes>
                
                <Route path='/' element={<HomePage/>} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/cart' 
                    element={
                    <ProtectedRoute>
                       
                            <CartPage />
                        
                    </ProtectedRoute>
                    }
                />

                <Route path='/products' element={<ProductsPage/> } />
                
                
                
                <Route path='/login' element={ <Login/>}/>

                <Route path='/register' element={<Register/>}/>

                <Route path='/forgotpwd' element={<ForgotPassword/>}/>
                
            </Routes>
            </CartProvider>
            </AuthProvider>
        </>
    )
}

export default App
