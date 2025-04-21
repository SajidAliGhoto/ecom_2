import React, { useState } from "react";
import ProductCatalog from "../data/productCatalog";
import { useNavigate } from "react-router-dom";
const ProductsPage = ({addToCart})=>{

    // Combine all product categories into a single array
    const allProducts = Object.values(ProductCatalog).flat();

    const [orderId,setOrderId] = useState(null);
    const navigate = useNavigate();
    return(
        <div>
             <div className="container flex flex-col items-center gap-5 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-5">
                    {/* Products List  */}
                    {allProducts.map((item) => (
                        
                        <div key={item.id} className="flex flex-col items-center justify-center shadow-lg rounded-lg p-2 gap-2">
                            <img src={item.image}
                                className="w-fit h-40 "
                            ></img>
                            <div>
                                <h1>{item.name}</h1>
                                <p>Price: {item.price}</p>
                                <p>Discount: {item.discountPercentage}%</p>
                            </div>
                            {orderId === item.id ?

                            <div className="flex items-center justify-between w-full">
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={()=> addToCart(item)}
                            >Add To Cart</button>
                            <button className='px-3 bg-primary transition-all duration-200 text-white py-1 rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap '
                                onClick={()=> {addToCart(item); navigate('/cart')} }
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