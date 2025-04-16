import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from './components/Products/Products.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts.jsx';
import Banner from './components/Banner/Banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import OrderNowPopup from './components/Popup/OrderNowPopup.jsx';
function App() {

    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    }

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
            <Navbar handleOrderPopup={handleOrderPopup}/>
            <Hero handleOrderPopup={handleOrderPopup}/>
            <TopProducts handleOrderPopup={handleOrderPopup}/>
            <Banner/>
            <Subscribe/>
            <Products/>
            <Testimonials/>
            <Footer/>
            <OrderNowPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
        </>
    )
}

export default App
