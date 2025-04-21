import React from 'react';
import Image1 from '../../assets/hero/sale.png'
import Image2 from '../../assets/hero/women.png'
import Image3 from '../../assets/hero/shopping.png'
import Slider from 'react-slick';

    const ImageList = [
        {
            id:'1',
            imag:Image1,
            title:"Up to 50% off on all Men's Wear",
            description:"Refresh your wardrobe with amazing deals Stylish menswear at unbeatable prices. Don’t miss out on the latest trends."
        },
        {
            id:'2',
            imag:Image2,
            title:"Up to 30% off on all Women's Wear",
            description:"Refresh your wardrobe with amazing deals Stylish menswear at unbeatable prices. Don’t miss out on the latest trends."
        },
        {
            id:'3',
            imag:Image3,
            title:"Up to 70% off on all Product's Sell",
            description:"Refresh your wardrobe with amazing deals Stylish menswear at unbeatable prices. Don’t miss out on the latest trends."
        }
    ]

    const settings = {
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       cssEase: "linear",
       arrows: false,
  };

const Hero = ({handleOrderPopup}) => {
    return(
        <div id='home' className=' relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center
        dark:bg-gray-950 dark:text-white duration-200 z-10
        '>
            {/*Background pattern*/}
            <div
            className='h-[40rem] w-[40rem] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'
            >

            </div>

            {/*Hero Section*/}
            

            <div className='container pb-8 sm:pb-8'>
                <Slider {... settings}>
                {ImageList.map((data) => (

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-center justify-between'>
                <div key={data.id} className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16'>
                    {/*Text content section*/}
                    <div className='flex flex-col items-start justify-center gap-4 sm:gap-8 text-left max-w-[50%]
                    order-2 sm:order-1 relative z-10 ' >
                        <h1 
                            data-aos="zoom-out"
                            data-aos-duration='500'
                            data-aos-once="true"
                        className='text-2xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                        <p 
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                        
                        className='text-sm'>{data.description}</p>
                        <div
                            
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                        >
                            <button
                            className='bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-200 text-white py-1 px-4
                                rounded-full flex'
                            onClick={() => handleOrderPopup()}
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/*Image section*/}
                    <div className='order-1 sm:order-2'>
                        <div className='relative z-10'>
                            <img
                            src={data.imag}
                            alt={data.title}
                            className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm: scale-105 lg:scale-120 object-contain mx-auto'
                            >
                            </img>
                    </div>

                </div>
                
                </div>
                </div>
                ))}
                </Slider>
            </div>
                
        </div>
        
    )
}
export default Hero;