import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

  const [MenuOpen, setMenuOpen] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  }
  return (
    <div>
      <nav className='bg-violet-950 p-6 flex justify-between items-center relative'>
        <div className="font-bold text-2xl md:px-20 pacifico "><NavLink to={"/"}>KJ&SK Chatify App</NavLink></div>


        {/* this is for desktop */}
        <ul className='flex flex-col md:flex-row md:gap-10 font-semibold cursor-pointer text-red-200'>
          <div className="hidden md:flex gap-6 items-center">
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/"}>Home</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/about"}>About</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/contact"}>Contact</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/allchats"}>Chat List</NavLink>
            <NavLink className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/login"}>Login</NavLink>
            <NavLink className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/signup"}>Signup</NavLink>
            </div>
        </ul>

        
        {/* hamburger for mobile */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={ToggleMenu}><GiHamburgerMenu/></div>

        {/* this is for mobile */}
        {MenuOpen && 
        <div className='md:hidden absolute top-0 right-0 w-[70vw] flex flex-col justify-center items-center bg-white mt-4 gap-3 p-4 rounded z-50'>
           <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/"}>Home</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/about"}>About</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/contact"}>Contact</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/allchats"}>Chat List</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/login"}>Login</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/signup"}>Signup</NavLink>
          </div>}
      </nav>
    </div>
  )
}

export default Navbar
