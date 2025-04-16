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
            <Navbar/>
            <Hero/>
            <TopProducts/>
            <Banner/>
            <Subscribe/>
            <Products/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default App
