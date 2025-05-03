import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const authToken = localStorage.getItem("authToken");
   
    const navigate = useNavigate();

    useEffect(()=>{
        if(!authToken)
            navigate('/login');
    },[navigate])

    return authToken ? children : null;
}

export default ProtectedRoute;