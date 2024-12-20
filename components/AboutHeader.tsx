"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="xl:min-w-[1440px] xl:px-[80px] xl:py-[16px] flex justify-between items-center text-[#c7c7c7] sm:min-w-[375px] sm:px-[15px] relative">
      <h1 className="bebas xl:text-[32px] sm:text-[28px]">MUHAMMAD SHARIQ</h1>
      
      {/* Desktop Navigation */}
      <nav className="xl:flex justify-center items-center gap-[32px] text-[16px] inter sm:hidden">
        <Link href="/">Home</Link>
        <Link href="#capabilities">My Capabilites</Link>
        <Link href="#education">Education</Link>
        <Link href="#contact-2">Contact</Link>
        
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="xl:hidden sm:block">
        <button type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-[15px]" />
        </button>
      </div>

      {/* Mobile Sidebar (Same Navbar) */}
      {isMenuOpen && (
        <nav
          className="absolute top-0 right-0 h-[250px] bg-white  w-[110px] flex flex-col items-start gap-[16px] p-[20px] text-black inter xl:hidden"
        >
          <button
            type="button"
            onClick={toggleMenu}
            className="self-end mb-[20px] text-black"
          >
            Close
          </button>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#capabilities" onClick={toggleMenu}>
            Capabilies
          </Link>
          <Link href="#education" onClick={toggleMenu}>
            Education
          </Link>
          <Link href="#contact-2" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
