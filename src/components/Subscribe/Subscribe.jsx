import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles



const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Suscribe = () => {

  return (
    <div data-aos='zoom-in'
    className=" mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container py-10 backdrop-blur-sm flex items-center justify-center mx-auto">
        <div className="max-w-xl space-y-6 max-auto">
          <h1 className="text-2xl !text-center text-white font-bold sm:text-left sm:text-4xl sm:font-semibold">Get Notified About New Products</h1>
          <input 
            data-aos='fade-up'
            placeholder="Enter your email" 
            className="w-full p-3 aos-init aos-animate"></input>
        </div>
      </div>
    </div>
  );
}
export default Suscribe;