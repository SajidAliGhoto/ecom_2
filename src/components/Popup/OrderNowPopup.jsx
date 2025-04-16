import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const OrderNowPopup = ({orderPopup,setOrderPopup}) => {
    
  return (
    <>
        {orderPopup && (
            
            <div className="h-screen w-screen fixed flex-col top-0 left-0 bg-black/50 flex justify-center items-center z-50">
                
                <div className="bg-white dark:text-white dark:bg-gray-800 p-3 rounded-lg">
                    {/*Form Header */}
                    <div className="flex items-center justify-between p-2">
                    <h1>Order Now</h1>
                    <IoCloseCircleOutline onClick={()=>setOrderPopup(false)} className="cursor-pointer text-2xl dark:text-white text-gray-500 hover:text-gray-800"/>
                    </div>
                   {/* Form Body */}
                    <form className="flex items-center flex-col gap-4 p-4">
                        <input type="text" placeholder="Name" className="bg-white  dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                        <input type="email" placeholder="Email" className="bg-white dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                        <input type="text" placeholder="Phone Number" className="bg-white dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                        <input type="text" placeholder="Address" className="bg-white dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                        <button type="submit" className=' bg-primary transition-all duration-200 text-white py-1 px-4
                            rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap !important'
                            
                        >Order Now</button>
                    </form>
                </div>

            </div>

            )}
    </>
  );
}
export default OrderNowPopup;