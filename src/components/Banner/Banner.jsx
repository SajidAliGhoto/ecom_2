import React from 'react';
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';




const Banner = () => {

    return (
        <div className=' dark:bg-gray-800 dark:text-white bg-white min-h-screen'>
        <div className="container min-h-[550px] flex items-center justify-center sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* Image Section */}
                <div data-aos='zoom-in'>
                    <img src={BannerImg} alt='Banner'
                    className='max-w-[400px] h-[350px] w-full max-auto drop-shadow-[_10px,10px,12px,rgba(0,0,0,1)] object-cover rounded-lg'
                    />
                </div>
                {/* Text Section */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0' >
                    <h1 className='text-3xl font-bold text-black dark:text-white sm:text-4xl' data-aos="fade-up" data-aos-delay='100'>Winter Sale upto 50% Off</h1>
                    <p className='text-gray-500 text-sm tracking-wide leading-5' data-aos="fade-up" data-aos-delay='200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4 ' data-aos='fade-up' data-aos-delay='300'>
                            <GrSecure className='text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                            <p>Quality Products</p>
                        </div>
                        <div className='flex items-center gap-4 ' data-aos='fade-up' data-aos-delay='600'>
                            <IoFastFood className='text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                            <p>Fast Delivery</p>
                        </div>
                        <div className='flex items-center gap-4 ' data-aos='fade-up' data-aos-delay='900'>
                            <GiFoodTruck className='text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                            <p>Easy Payemnt method</p>
                        </div>
                        <div className='flex items-center gap-4 ' data-aos='fade-up' data-aos-delay='1200'>
                            <GiFoodTruck className='text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                            <p>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    }

    export default Banner;