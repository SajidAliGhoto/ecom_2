import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
import React, {useState} from "react";

const DarkMode=()=>{

    const [theme,setTheme]=useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;
    console.log(element);

    React.useEffect(()=>{
        if (theme==='dark'){
            element.classList.add('dark')
            localStorage.setItem("theme","dark");}
        else{
            element.classList.remove('dark')
            localStorage.setItem("theme", "light");
        }
    },[theme])

    return (
        <div>
        {theme === 'dark' && <img
            src={DarkButton}
            alt="Dark Mode"
            onClick={()=>{setTheme('light')}}
            className=' w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
        />}
            {theme === 'light' && <img
                src={LightButton}
                alt="Light Mode"
                onClick={()=>{setTheme('dark')}}
                className=' w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
            />}
        </div>
    );
}
export default DarkMode;