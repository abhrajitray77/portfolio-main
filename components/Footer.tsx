import React from "react";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      //viewport={{ once: true }}
     className="w-full flex items-center space-x-4 group">
      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>

      <h2 className="lg:whitespace-nowrap text-center">
        Built with ❤️ using Next.js 13, TailwindCSS and Framer Motion
      </h2>

      <span className="w-[50%] h-1 bg-cyan-600 dark:bg-cyan-300 transition-all duration-500 group-hover:blur-sm"></span>
    </motion.div>
  );
};

export default Footer;
