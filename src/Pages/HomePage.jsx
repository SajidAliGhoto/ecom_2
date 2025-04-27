
import Hero from "../components/Hero/Hero.jsx";
import Products from '../components/Products/Products.jsx';
import TopProducts from '../components/TopProducts/TopProducts.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Subscribe from '../components/Subscribe/Subscribe.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Footer from '../components/Footer/Footer.jsx';
import OrderNowPopup from '../components/Popup/OrderNowPopup.jsx';
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({addToCart}) => {
        
    const [orderId,setOrderId] = useState(null);
    const navigate = useNavigate();

    const showDetails = (id) => {
        navigate(`/product/${id}`);
        window.scroll({top:0,behavior:'smooth'});
    }

    return (
        <div id="home">
            <Hero/>
            <TopProducts addToCart={addToCart} orderId={orderId} setOrderId={setOrderId} navigate={navigate} showDetails={showDetails}/>
            <Banner/>
            <Subscribe/>
            <Products addToCart={addToCart} orderId={orderId} setOrderId={setOrderId} navigate={navigate} showDetails={showDetails}/>
            <Testimonials/>
            <Footer/>
            <OrderNowPopup/>
        </div>
    );
}
export default HomePage;