import React, { useState } from 'react'
import { SidebarData } from "./SidebarData";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ResponsiveNavbar() {

    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
     <>
        <div className="fixed h-8 w-full bg-blue-400 text-gray-200 flex flex-row justify-between">
            <button onClick={()=>{showSideMenu()}} className="lg:visible menu-button">
                {(isSideMenuOpen) ? <CloseIcon fontSize="medium"></CloseIcon> : <MenuIcon fontSize="medium"></MenuIcon>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}            
            
            <div className="text-lg font-bold px-2">Vishal</div>            
            
        </div>
    </>
    )
}

const SideMenu = () => {
    return(
        <>
        <div className="fixed h-screen w-40 lg:visible bg-blue-500 top-8">
            <ul className="menu-list flex flex-col text-sm font-bold pt-6">
                <li className="flex flex-row items-center px-3 pb-12">
                    <AccountCircleIcon fontSize="large" />
                    <h1 className="px-3">Username</h1>
                </li>

             {SidebarData.map((val,key) =>{
                        return(
                        <li className="flex flex-col pl-5 py-2 hover:bg-white hover:text-blue-700"                    
                            key={key}>
                        <Link to={val.path} className="" >        
                            {val.icon}
                        <span className="px-4">{val.title}</span>
                        </Link>
                        </li>
                        );
             }
             )}               
            </ul>
        </div>
        </>
    ) 
} 