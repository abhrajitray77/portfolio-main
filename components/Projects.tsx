import React from "react";
import ProjCard from "./ProjCard";
import { motion, Variants } from "framer-motion";
import ProjectDetails from "@/utils/projDetails";

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
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={card}
      className="bg-white/50 dark:bg-[#121212a4] p-8 rounded-2xl"
    >
      {" "}
      <h1 className="custom-h1 mx-auto mt-10 flex justify-center ">
        Projects that I&apos;ve worked on
      </h1>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        //viewport={{ once: true }}
        variants={pcard}
        className="flex-cols w-full mt-20  space-y-20"
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
    </motion.div>
  );
};

export default Projects;
