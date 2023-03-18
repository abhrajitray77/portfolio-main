import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center space-x-4 group">
      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>

      <h2 className="lg:whitespace-nowrap text-center">
        Built with ❤️ using Next.js 13, TailwindCSS and Framer Motion
      </h2>

      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>
    </div>
  );
};

export default Footer;
