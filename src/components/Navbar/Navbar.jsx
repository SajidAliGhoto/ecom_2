import {FaCartShopping} from "react-icons/fa6";
import {FaCaretDown} from 'react-icons/fa';
import DarkMode from "./DarkMode.jsx";


const Manu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
];


const Navbar=({handleOrderPopup})=> {

    return (<div className="flex justify-between items-center shadow-md bg-white  duration-200 relative
    flex-col dark:bg-gray-900 dark:text-white z-20
    ">
            {/*//upper navbar*/}

            <div className="bg-primary/40 py-2 px-5 w-full dark:bg-[#705227]">
                <div className="container flex items-center justify-between">
                    <div>
                        <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src="src/assets/logo.png" alt="Logo"
                                 className='w-10'
                            />
                            Shopsy
                        </a>
                    </div>
                    {/*search bar*/}
                    <div className="flex items-center justify-between gap-4 ">
                        <div className='relative group hidden sm:block'>
                            <div className='group flex flex-row items-center
                                    max-w-[300px] transition-all duration-300
                                    rounded-full border border-gray-300 px-2 py-1
                                    focus: outline-none focus:border-1
                                    bg-white dark:bg-gray-800'
                                    >

                                <input
                                    type="text"
                                    placeholder='search'
                                    className="w-[170px] sm:w-[170px] group-hover:w-[270px] transition-all duration-300 focus:outline-none dark:bg-gray-800"
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

                        </div>

                        {/*Order Button*/}
                        <button
                            className='bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-200 text-white py-1 px-4
                     rounded-full flex items-center justify-center gap-3 group'
                        onClick={handleOrderPopup}
                        >
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                        </button>

                        <div>
                            <DarkMode></DarkMode>
                        </div>

                    </div>
                </div>
            </div>

            {/*lower navbar*/}
            <div data-aos='zoom-in' className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4 py-2'>
                    {Manu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link}
                               className='inline-block px-4 hover:text-amber-500'
                            >
                                {data.name}
                            </a>
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
                                        <a href={data.link}
                                           className='block w-full hover:bg-amber-100 p-1 rounded-md'
                                        >
                                            {data.name}
                                        </a>
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