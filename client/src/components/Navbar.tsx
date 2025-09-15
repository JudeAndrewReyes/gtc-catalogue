import { useState, useEffect } from "react";
import assets from "../assets/assets";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
                <img
                    onClick={()=> setShowMobileMenu(true)} 
                    src={assets.menu_icon} 
                    alt="Menu" 
                    className="md:hidden w-7 cursor-pointer" 
                />
                
                {/* Logo + Brand */}
                <a href="#Home" className="flex items-center gap-3">
                <img src={assets.logo} alt="Gensson Logo" className="w-12 h-12 rounded-full shadow-md" />
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 hover:text-red-600 transition-colors">
                    Gensson Trade Corporation
                    </span>
                    <div className="flex gap-2 text-xs text-gray-600 mt-1 flex-wrap">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">🏆 Authorized STIHL Dealer</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">Since 2006</span>
                    </div>
                </div>
                </a>
                

                {/* Navigation Links */}
                <nav>
                    {/* Desktop Navigation - Hidden on mobile */}
                    <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
                        <li>
                            <a href="#Brands" className="hover:text-red-600 transition-colors">Brands</a>
                        </li>
                        <li>
                            <a href="#Partnership" className="hover:text-red-600 transition-colors">Partnership</a>
                        </li>
                        <li>
                            <a href="#Contact" className="hover:text-red-600 transition-colors">Contact Us</a>
                        </li>
                    </ul>
                    
                    {/* Mobile Menu Icon - Hidden on desktop */}
                    <img
                        onClick={()=> setShowMobileMenu(true)} 
                        src={assets.menu_icon} 
                        alt="Menu" 
                        className="md:hidden w-7 cursor-pointer invert" 
                    />
                    
                    {/* Mobile Menu */}
                    <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white z-50`}>
                        <div className='flex justify-end p-6'>
                            <img 
                            onClick={()=> setShowMobileMenu(false)}
                            src={assets.cross_icon} 
                            className='w-6 cursor-pointer' 
                            alt="Close"
                            />
                        </div>
                        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                            <a onClick={()=> setShowMobileMenu(false)} href="#Brands" className='px-4 py-2 rounded-full inline-block hover:text-red-600 transition-colors'>Brands</a>
                            <a onClick={()=> setShowMobileMenu(false)} href="#Partnership" className='px-4 py-2 rounded-full inline-block hover:text-red-600 transition-colors'>Partnership</a>
                            <a onClick={()=> setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block hover:text-red-600 transition-colors'>Contact Us</a>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;