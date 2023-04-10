import React, { useEffect, useState } from "react";
import { motion, spring } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeButton from "./ThemeButton";

function scrollToSection(event : any) {
  event.preventDefault(); // Prevents default behavior of anchor tags

  const sectionId = event.target.getAttribute('href'); // Gets the ID of the section to scroll to

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scrolls to the section with a smooth animation
}


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)



  return (
    <nav className="w-auto flex justify-end mr-3 md:mr-10 z-50">
      <ul className="hidden md:flex items-center space-x-4 md:space-x-10 py-8 font-bold">
        <li className="nav-item" ><a href="#about" onClick={scrollToSection}>About Me </a></li>
        <li className="nav-item" ><a href="#skills" onClick={scrollToSection}>Skills </a></li>
        <li className="nav-item" ><a href="#proj" onClick={scrollToSection}>Projects </a></li>
        <li className="nav-item" ><a href="#cont" onClick={scrollToSection}>Contact </a></li>
        <ThemeButton />
      </ul>
      <div className="flex md:hidden mr-3 md:mr-10 z-50 py-8">
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
