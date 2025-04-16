import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ()=>{
    return <div className=" dark:bg-gray-800 dark:text-white pb-10 pt-10 bg-white min-h-screen">

        {/* Header Section */}
        <div className="container text-left mb-24">
                <p className="text-md text-secondary" data-aos='fade-up'>Top Rated Products</p>
                <h1 className=" text-black dark:text-white text-3xl font-bold"data-aos='fade-up'>The Best Products</h1>
                <p className="text-slate-400 text-xs"data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

        {/* Body Section */}
        <div className="container mx-auto">
                <div className="grid place-items-center gap-5"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
                >
                    {/* Products List  */}
                    { ProductsData.map((data)=>(
                        <div className="
                        max-h-[300px] max-w-[300px]
                        rounded-2xl bg-white dark:bg-gray-700 hover:bg-black/80
                        hover:text-white dark:hover:bg-primary shadow-xl relative duration-[300] group flex flex-col items-center justify-center
                        "
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                        >
                            <div>
                            <img className="max-w-[140px] block max-auto transform -translate-y-20 
                            group-hover:scale-105 duration-300 drop-shadow-md"
                            src={data.img}
                            alt={data.title}    
                            />
                            </div>
                            <div style={{marginTop: '-70px'}} >
                                <div className="py-4 text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                        <FaStar className="text-yellow-400"/>
                                    </div>

                                    <h1 className="text-xl text-black font-bold group-hover:text-white ">{data.title}</h1>
                                    <p className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2 mb-2">{data.description}</p>
                                    <button
                                        className='bg-primary transition-all duration-200 text-white py-1 px-4
                                        rounded-full flex group-hover:bg-white group-hover:text-primary !important'>
                                            Order Now
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

    </div>
}

export default TopProducts;