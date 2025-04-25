import React, { useState } from "react";
import {FaCaretDown} from 'react-icons/fa';
import { Link } from "react-scroll";
import ProductCatalog from "../data/productCatalog";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
const ProductsPage = ({addToCart})=>{

    // Combine all product categories into a single array
    const allProducts = Object.values(ProductCatalog).flat();

    const [orderId,setOrderId] = useState(null);
    const navigate = useNavigate();

    const [filterType,setFilterType] = useState("");

    // using useMemo to only recalculate when dependencies change
    var filteredProducts = useMemo(()=>{
        var CopyProducts = [ ...allProducts]; //avoided mutating

            switch(filterType) {
                case "NameAsc":
                    return CopyProducts.sort( (a,b)=> a.title.localeCompare(b.title) );
                case "NameDesc":
                    return CopyProducts.sort( (a,b)=> b.title.localeCompare(a.title) );
                case "PriceLow":
                    return CopyProducts.sort((a,b) => a.price-b.price);
                case "PriceHigh":
                    return CopyProducts.sort((a,b) => b.price-a.price);
                /*case "Newest":    bcx we dont have date on our products
                    return new Date(a.)
                case "Oldest"
                    return */
                default:
                    return CopyProducts;    
            }

    
    },[filterType,allProducts] );

    console.log(filteredProducts)

    return(
        <div>
            <div className="container pt-10">
                <li className='group relative cursor-pointer'>
                    <a className='flex items-center gap-[2px]'>
                        
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block rounded-md w-[200px]
                        bg-white py-2 px-2 text-black shadow-md
                    '>
                        <ul>
                             <li >
                                <button 
                                  onClick={() => setFilterType("NameAsc")}
                                  className='block w-full hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Name [A-Z]
                                </button>
                                <button 
                                  onClick={() => setFilterType("NameDesc")}
                                  className='block w-full hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Name [Z-A]
                                </button>
                                <button 
                                  onClick={() => setFilterType("PriceLow")}
                                  className='block w-full hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Price: Low to High
                                </button>
                                <button 
                                  onClick={() => setFilterType("PriceHigh")}
                                  className='block w-full hover:bg-amber-100 p-1 rounded-md'
                                >
                                  Price: High to Low
                                </button>
   
                            </li>
                        </ul>
                    </div>    
                </li>

                <select className="w-25 p-1.5 bg-primary/40 border-white shadow-md rounded-md"
                    onChange={(e)=> setFilterType(e.target.value)}
                >
                    <option className="bg-white border-1 border-primary hover:bg-primary/40" value={""}>Filter by</option>
                    <option value={"NameAsc"}></option>
                    <option value={"NameDesc"}>Name {"[Z-A]"}</option>
                    <option value={"PriceLow"}>Price: Low to High</option>
                    <option value={"PriceHigh"}>Price: High to Low</option>
                    {/* <option value={"Newest"}>Date Newest First</option>
                    <option value={"Oldest"}>Date Oldest First</option> */}
                </select>
                
            </div>
             <div className="container flex flex-col items-center gap-5 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-5">
                    {/* Products List  */}
                    {filteredProducts.map((item) => (
                        
                        <div key={item.id} className="flex flex-col items-center justify-center border-2 md:w-max w-80 shadow-lg rounded-lg p-2 gap-2">
                            <img src={item.img}
                                className="w-[15rem] h-[12rem] "
                            ></img>
                            <div>
                                <h1>Name:{item.title}</h1>
                                <p>Price: {item.price}</p>
                                <p>Discount: {item.discountPercentage}%</p>
                            </div>
                            {orderId === item.id ?

                            <div className="flex items-center justify-between w-full">
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={()=> addToCart(item)}
                            >Add To Cart</button>
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={()=> {addToCart(item); console.log(item); navigate('/cart')} }
                            >Buy Now</button>
                            </div>
                            :

                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={()=> setOrderId(item.id)}
                            >Order Now</button>
                            
                            }
                            
                        </div>
                    ))}
                </div>
           </div>
        </div>
    );
}
export default ProductsPage;