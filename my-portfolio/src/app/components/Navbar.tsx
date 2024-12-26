"use client";
import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu.png';
import Image from 'next/image';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  return (
    <nav className={`w-full  top-0 left-0 z-10  ${sticky ? 'bg-black' : 'bg-transparent'} transition-colors`}>
      <div className="  flex justify-between items-center py-4 px-6 md:px-8 bg-[#010429]">
        <a href="#hero" className="text-white text-2xl font-bold ">Portfolio</a>

        <ul className="hidden md:flex space-x-8 text-white font-bold transition-all">
          <li><a href="#home" className="hover:text-gray-200">Home</a></li>
          <li><a href="#About" className="hover:text-gray-200">About</a></li>
          <li><a href="#Skills" className="hover:text-gray-200">Skills</a></li>
          <li><a href="#Projects" className="hover:text-gray-200">Project</a></li>
          <li><a href="#Contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
        <div className="md:hidden">
          <Image
            src={menu_icon}
            alt="Menu icon"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          />
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-black text-white w-full px-6 py-4 space-y-4">
          <a href="#Home" onClick={toggleMenu} className="block">Home</a>
          <a href="#About" onClick={toggleMenu} className="block">About</a>
          <a href="#Skills" onClick={toggleMenu} className="block">Skills</a>
          <a href="#Projects" onClick={toggleMenu} className="block">Project</a>
          <a href="#Contact" onClick={toggleMenu} className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
