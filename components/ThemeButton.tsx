"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={`flex-start flex rounded-full bg-zinc-100 
  p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 theme-but`}
    >
      <motion.div
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {currentTheme === "light" ? (
            <SunIcon className="h-6 w-6 text-yellow-300" />
          ) : (
            <MoonIcon className="h-6 w-6 text-yellow-100" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeButton;
