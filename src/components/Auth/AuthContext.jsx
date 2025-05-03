import React from "react";
import { createContext , useContext ,useState } from "react";

// 1) creating context
const AuthContext = createContext();

// 2) create context-provider

export const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    
    const login =()=>{

    }

    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,login}}>
            {children}
        </AuthContext.Provider>
    )
}
// 3. Custom hook to use the AuthContext
export const useAuth= ()=> useContext(AuthContext);