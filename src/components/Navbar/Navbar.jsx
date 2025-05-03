import {FaCartShopping} from "react-icons/fa6";
import {FaCaretDown} from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import DarkMode from "./DarkMode.jsx";
import Logo from "../../assets/logo.png"; 
// {When you import the logo as a module, the bundler (Vite) processes the image and ensures the correct path is used in the final build. This way, the logo will load correctly both locally and on the deployed site.}
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCatalog from "../../data/productCatalog.js";

const Manu = [
    {
        id: 1,
        name: "Home",
        link: "home",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "top-rated",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "kids-wear",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "mens-wear",
    },
    {
        id: 5,
        name: "Electronics",
        link: "electronics",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "trending-products",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "top-selling-products",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "top-rated",
    },
];


const Navbar=({handleOrderPopup,isLoggedIn})=> {

    const products = Object.values(ProductCatalog).flat();
    const navigate = useNavigate();
    const location = useLocation();

    const [search,setSearch] = useState("");
    const [suggestions,setSuggestions] = useState([]);

    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate('/');
    }
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearch(query);
    
        console.log("Query:", query); // Debugging query
        console.log("products:", products); // Debugging cartItems
    
        if (!products || products.length === 0) {
            setSuggestions([]);
            return;
        }
    
        if (query.trim() === "") {
            setSuggestions([]);
            return;
        }
    
        const matches = products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
    
        console.log("Suggestions:", matches); // Debugging suggestions
        setSuggestions(matches);
    };

    const showDetails = (id) => {
        navigate(`/product/${id}`);
    };

    const handleNavClick = (link) => {
        if (location.pathname !== "/") {
            // Navigate to the homepage first
            navigate("/");
        }
        // Scroll to the desired section after navigation
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Delay to ensure the homepage is loaded
    };


    return (<div className="flex justify-between items-center shadow-md bg-white  duration-200 relative
    flex-col dark:bg-gray-900 dark:text-white z-20
    ">
            {/*//upper navbar*/}

            <div className="bg-primary/40 py-2 px-5 w-full dark:bg-[#705227]">
                <div className="container flex items-center justify-between">
                    <div>
                        <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo"
                                 className='w-10'
                            />
                            Shopsy
                        </a>
                    </div>
                    {/*search bar*/}
                    <div className=" relative flex items-center justify-between gap-4 ">
                        <div className='relative group hidden sm:block'>
                            <div className='group flex flex-row items-center
                                    max-w-[300px] transition-all duration-300
                                    rounded-full border border-gray-300 px-2 py-1
                                    focus: outline-none focus:border-1
                                    bg-white dark:bg-gray-800'
                                    >

                                <input
                                    onChange={(e)=> handleSearch(e)}
                                    type="text"
                                    placeholder='search'
                                    className="w-[170px] sm:w-[170px] focus-within:w-[270px] transition-all duration-300 focus:outline-none dark:bg-gray-800"
                                />
                                <span className='group-hover:text-amber-500 transition-colors duration-300'>

                                <svg xmlns="http://www.w3.org/2000/svg"
                                     x="0px" y="0px" width="20" height="20"
                                     viewBox="0 0 50 50"
                                     className='fill-current'
                                >
                                    <path
                                        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                </svg>

                                </span>
                            </div>
                            
                            <div className="absolute top-10 right-99 bg-white text-black px-4 z-[9999] rounded-md">
                                {suggestions.map((item) => (
                                    <a key={item.id} className="block hover:text-amber-500"
                                        onClick={()=> showDetails(item.id)}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                                
                            
                            
                            </div>
                            

                        </div>
                        
                        

                        {/*Order Button*/}
                        <button
                            className='bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-200 text-white py-1 px-4
                     rounded-full flex items-center justify-center gap-3 group'
                        onClick={
                            isLoggedIn ? ()=> navigate('cart'): () => handleOrderPopup}
                        >
                            <span className='group-hover:block hidden transition-all duration-200'
                            
                            >Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                        </button>

                        <div>
                            <DarkMode></DarkMode>
                        </div>
                        <div
                            className="flex gap-1  overflow-y-auto group"    
                        >
                            <CiUser className="group-hover:hidden"></CiUser>
                            <p onClick={handleLogout} className="bg-white p-1 hidden group-hover:block cursor-pointer shadow-md fix top-10 right-3">Logout</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*lower navbar*/}
            <div data-aos='zoom-in' className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4 py-2'>
                    {Manu.map((data) => (
                        <li key={data.id}>
                           <RouterLink
                                to="/"
                                onClick={() => handleNavClick(data.link)}
                                className="inline-block px-4 hover:text-amber-500 cursor-pointer"
                            >
                                {data.name}
                            </RouterLink>
                        </li>
                    ))}

                    {/* Simple DropDown and links*/}
                    <li className='group relative cursor-pointer'>
                        <a className='flex items-center gap-[2px]'>
                            Trending Products
                            <span>
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block rounded-md w-[200px]
                            bg-white py-2 px-2 text-black shadow-md
                        '>
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <RouterLink
                                            to="/"
                                            onClick={() => handleNavClick(data.link)}
                                            className="block w-full hover:bg-amber-100 p-1 rounded-md"
                                        >
                                            {data.name}
                                        </RouterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>

        </div>


    );
}

export default Navbar;