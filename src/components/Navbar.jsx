import React from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import Header from './Header';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='fixed top-0 z-20 w-[100vw] px-6 py-4 bg-white '>
    <Header/>
    <div className='flex items-center px-10 py-5 overflow-auto gap-x-5 drop-shadow-md'>
    <div className="w-36 ">
    <Link to={'/'}>
    <img  className='w-[100%]' src="https://ecommo--ion.bluenile.com/bn-main/logo.6b793.svg" alt="logo" />
    </Link>
    </div>
    <ul className='flex gap-x-6'>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black hover:opacity-50 gap-x-2'><span>Diamonds</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x- hover:opacity-50'><span>Engagement Rings</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x-2 hover:opacity-50'><span>Wedding Rings</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x-2 hover:opacity-50'><span>Jewelry</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x-2 hover:opacity-50'><span>Gifts</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x-2 hover:opacity-50'><span>Gemstones</span> <span><IoChevronDownSharp/></span></li>
    <li className='flex items-center transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black gap-x-2 hover:opacity-50'><span>Education</span> <span><IoChevronDownSharp/></span></li>

    </ul>
    </div>
    </div>
  )
}

export default Navbar