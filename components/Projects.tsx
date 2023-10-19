"use client"
import React from "react";
import ProjCard from "./ProjCard";
import { motion, Variants } from "framer-motion";
import ProjectDetails from "@/utils/projDetails";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const card: Variants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
const pcard: Variants = {
  offscreen: {
    translateY: 100,
    opacity: 0,
  },
  onscreen: {
    translateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const Projects = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={card}
      className="bg-white/50 dark:bg-[#121212a4] rounded-2xl relative"
    >
      <div className="max-h-[2300px] md:max-h-[1400px] overflow-y-clip rounded-2xl p-6 md:p-8">
      {" "}
      <h1 className="custom-h1 mx-auto mt-6 md:mt-10 flex justify-center text-center ">
        Projects that I&apos;ve worked on
      </h1>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        //viewport={{ once: true }}
        variants={pcard}
        className="flex-cols w-full mt-10 md:mt-20  space-y-20"
      >
        {ProjectDetails.map((proj, index) => (
          <ProjCard
            key={index}
            name={proj.name}
            desc={proj.desc}
            vidSrc={proj.vidSrc}
            projLink={proj.projLink}
            gitLink={proj.gitLink}
            tech={proj.tech}
          />
        ))}
      </motion.div>
      </div>
      <div className="absolute bottom-0 left-[32%] md:left-[42%] z-50 flex flex-col
      space-y-1 m-4 ">
        <ArrowDownCircleIcon className="mx-auto mt-10 animate-bounce w-10 h-10 cursor-pointer " />
        <h2 className="font-medium dark:text-gray-100text-gray-900">Wanna see more?</h2>
      </div>
      <div className="absolute bottom-0 w-full h-36 bg-gradient-to-t 
      from-white/50 dark:from-black/50 backdrop-blur-sm rounded-b-2xl"></div>
    </motion.div>

  );
};

export default Projects;
