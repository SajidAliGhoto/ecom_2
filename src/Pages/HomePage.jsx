
import Hero from "../components/Hero/Hero.jsx";
import Products from '../components/Products/Products.jsx';
import TopProducts from '../components/TopProducts/TopProducts.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Subscribe from '../components/Subscribe/Subscribe.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Footer from '../components/Footer/Footer.jsx';
import OrderNowPopup from '../components/Popup/OrderNowPopup.jsx';
import React from "react";

const HomePage = ({addToCart}) => {
        
    
    return (
        <>
            <Hero/>
            <TopProducts addToCart={addToCart}/>
            <Banner/>
            <Subscribe/>
            <Products addToCart={addToCart}/>
            <Testimonials/>
            <Footer/>
            <OrderNowPopup/>
        </>
    );
}
export default HomePage;