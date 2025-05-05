import { useNavigate } from "react-router-dom"; // Added useNavigate
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const Login = ()=>{
    
    const navigate = useNavigate();
    const {formData,setFormData,Login} = useAuth();

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormData ( { ...formData , [name]:value});
        
    }
    

    return(
        <div id="login" className="h-screen w-screen fixed flex-col top-0 left-0 bg-black/50 flex justify-center items-center z-50">
                        
            <div className="bg-white dark:text-white dark:bg-gray-800 p-3 rounded-lg">
               
               <div className="flex items-center justify-between p-2">
                   <h1>Login</h1>
                   <IoCloseCircleOutline onClick={()=>navigate('/')} className="cursor-pointer text-2xl dark:text-white text-gray-500 hover:text-gray-800"/>
                </div>
               
               {/* Form Body */}
                <form className="flex items-center flex-col gap-4 p-4">
                    <input type="email" placeholder="Email" onChange={handleChange} value={formData.email} name="email" className="bg-white dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                    <input type="password" placeholder="Password" onChange={handleChange} value={formData.password} name="password" className="bg-white dark:bg-gray-600 border border-gray-300 p-1 w-[15rem] rounded-full" required/>
                    <button type="submit" className=' bg-primary transition-all duration-200 text-white py-1 px-4
                        rounded-full flex hover:bg-gray-100 hover:text-primary text-nowrap !important'
                        onClick={Login}
                    >Login</button>
                </form>
                <div className="flex items-center justify-center flex-row gap-1">
                <p className="text-sm text-black">Don't have an account ? </p>
                <button className="text-md text-primary"
                   onClick={()=> navigate('/register')}
                >Sign Up</button>
                </div>
                <div className="w-full flex items-center justify-center">
                <button className=" text-sm text-primary"
                   onClick={()=> navigate('/forgotpwd')}
                >Forgot Password?
                </button>
                </div>
            </div>
        
        </div>
    );
};

export default Login;