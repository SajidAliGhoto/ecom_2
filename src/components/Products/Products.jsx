import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];
  
const Products = () => {
    return (
        <div className="pt-10 dark:bg-gray-800 dark:text-white bg-white min-h-screen">
            {/* Header Section */}
            <div className="container text-center mb-10">
                <p className="text-md text-secondary" data-aos='fade-up'>Top Selling Products</p>
                <h1 className=" text-black dark:text-white text-3xl font-bold" data-aos='fade-up'>Products</h1>
                <p className="text-slate-400 text-xs" data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>

            {/* Products Section */}
            <div className="container flex flex-col items-center gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-5">
                    {/* Products List  */}
                    { ProductsData.map((data)=>(
                        <div key={data.id} className="space-y-3"
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                        >
                            <img className="h-[220px] w-[150] object-cover rounded-md"
                            src={data.img}
                            alt={data.title}    
                            />
                            <div className="flex flex-col items-center justify-center sm:text-center md:text-left md:items-start">
                            <h1 className="font-semibold text-xl sm:text-lg">{data.title}</h1>
                            <p className="text-xl sm:text-lg">{data.color}</p>
                            <div className="flex items-center gap-1 sm:text-xl">
                                <FaStar className="text-yellow-400"/>
                                <span className="text-xl sm:text-lg">{data.rating}</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-10 w-[100] h-[50] p-1.5 bg-primary text-white rounded-md cursor-pointer">View All Button</button>
            </div>
        </div>
    );
}

export default Products;