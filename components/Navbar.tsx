import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="w-auto flex justify-end mr-3 md:mr-10 z-50">
      <ul className="hidden md:flex items-center space-x-4 md:space-x-10 py-8 font-bold">
        <li className="nav-item">About Me</li>
        <li className="nav-item">Skills</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <ThemeButton />
      </ul>
      <div className="flex md:hidden mr-3 md:mr-10 z-50 py-8">
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
