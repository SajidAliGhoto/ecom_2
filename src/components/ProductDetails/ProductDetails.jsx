import React, { useState } from "react";
import ProductsData from "../../data/products.js";
import RatedProductsData from "../../data/ratedProducts.js"
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const ProductDetails = ({ addToCart }) => {
    
    const { id } = useParams();
    const product = ProductsData.find((product) => product.id === parseInt(id));
    var ratedProduct = null;
    if (!product) {
         ratedProduct = RatedProductsData.find((product) => product.id === parseInt(id));   
    }
    
    // console.log(product)
    if(product){
    return (
    
        <div className="flex flex-col items-center justify-center gap-5 p-5 min-h-screen">
        
            <img
                src={product.img}></img>
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900">Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <button
            
                onClick={() => addToCart(product)}
                className="bg-primary text-white py-2 px-4 rounded-full hover:bg-gray-100 hover:text-primary transition-all duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
    }
    else if(ratedProduct){
        const [ReviewDone,setReviewDone] = useState(false);
        return (
            <div className="grid grid-cols-2 gap-5 bg-white dark:bg-[#705227] dark:text-white min-h-screen" >
    
            <div className="flex flex-col items-center justify-center gap-2 p-5 w-[50vw]">
            
                <img className="w-56 h-56 p-2 shadow-lg"
                    src={ratedProduct.img}></img>
                <h2 className="text-2xl font-bold">{ratedProduct.title}</h2>
                <p className="text-lg text-gray-700 dark:text-white">{ratedProduct.description}</p>
                <p className="text-xl font-semibold text-center text-gray-900 dark:text-white">Price: ${ratedProduct.price}</p>
                <p>Discount: {ratedProduct.discountPercentage}%</p>
                <button
                    onClick={() => addToCart(ratedProduct)}
                    className="bg-primary text-white py-2 px-4 rounded-full hover:bg-gray-100 hover:text-primary transition-all duration-200"
                >
                    Add to Cart
                </button>
            </div>

            {/* // Reviews on this Product */}
            <div className="flex flex-col w-full items-center justify-center p-10">
                {/* Header */}
                <div>
                    <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold dark:text-white">Reviews</h1>
                    <span className="text-lg font-bold dark:text-white flex items-center gap-5">{ratedProduct.rating} 
                    <FaStar className="text-yellow-400"/>
                    </span>
                    </div>
                    <p className="text-lg font-thin text-black dark:text-white">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Past Reviews Section  */}
                   {/* use map function bcx reviews is an array of objects not a single object */}
                <div>
                
                    {ratedProduct.reviews.map((review,index)=>{
                     return (
                     <div key={index} className="flex items-center mt-5 border border-gray-500 dark:border-white rounded-lg p-2">   
                        <img className="w-20 h-20 rounded-full shadow-lg" src={review.img} alt="reviewer_image"></img>
                        <div className="p-2">
                        <h3 className="text-xl font-sans">{review.reviewerName}</h3>
                        <p className="text-md">{review.comment}</p>
                        </div>
                    </div>
                     )
                    })}
                
                </div>
                 {/* give reviews */}
                {!ReviewDone ?
                    <div className="flex w-full">
                    <form className="w-[35vw] mt-5 border border-gray-500 dark:border-white rounded-lg p-2">
                    <textarea type="text" className="rounded-md p-5 bg-gray-300 w-full h-45 " 
                        placeholder="Write your reviews here"
                    ></textarea>
                    <button onClick={()=> setReviewDone(true)} type="submit" className='px-3 bg-primary transition-all duration-200 text-white py-1
                            rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap ' >Submit</button>
                    </form>
                    </div>
                    :
                    <div className="flex items-center mt-5 border bg-green-500 rounded-lg p-2 text-white text-md">
                        <h1>Thank you so much for your feedback</h1>
                    </div>
                }
                 
            </div>
            </div>
        );
    }else{
        return <div>Product not found</div>;
    }
}
export default ProductDetails;