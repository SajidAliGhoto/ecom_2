import React from "react";
import { createContext , useContext ,useState } from "react";

// 1) creating context
const AuthContext = createContext();

// 2) create context-provider

export const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })
    const Login=()=>{
        if(!formData.email || !formData.password){
            alert("Please enter email and password");
            return null;
        }

        localStorage.setItem("authToken",JSON.stringify(formData));
        navigate('/');
    }

    const Logout=()=>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("cartItems");
        setIsLoggedIn(false);
        navigate('/');
    }
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,login}}>
            {children}
        </AuthContext.Provider>
    )
}
// 3. Custom hook to use the AuthContext
export const useAuth= ()=> useContext(AuthContext);