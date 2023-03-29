import React from "react";
import ProjCard from "./ProjCard";
import encpic from "../public/imgs/enc.gif";
import netpic from "../public/imgs/net.gif";
import { motion, Variants } from "framer-motion";

const card: Variants = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delayChildren: 2,
      staggerChildren: 0.2,
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
      className="flex-cols w-full mt-20  space-y-20">
        <ProjCard
          name="Enactus SMIT"
          desc="The offcial website of Enactus SMIT built uing React.js, TailwindCSS and Framer Motion."
          imgSrc={encpic}
          altText="Enactus SMIT"
          projLink="https://enactus-smit-final.vercel.app/"
          tech={["React.js", "TailwindCSS", "Framer-Motion", "React-Router"]}
        />
        <ProjCard
          name="Netflix Landing Page Clone"
          desc="A Netflix landing page Clone build with Typescript, Next.js and TailwindCSS that uses the TMDB API
      to fetch the movie details and posters. "
          imgSrc={netpic}
          altText="Netflix Clone"
          projLink="https://netflix-learn.vercel.app/"
          tech={["Next.js", "TailwindCSS", "REST API"]}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
