import React from "react";
import ProjCard from "./ProjCard";
import encpic from "../public/imgs/enc.gif";
import netpic from "../public/imgs/net.gif";
import pepepic from "../public/imgs/pepegpt.gif";
import docpic from "../public/imgs/doc.gif";

import { motion, Variants } from "framer-motion";

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
        className="flex-cols w-full mt-20  space-y-20"
      >
        <ProjCard
          name="Enactus SMIT"
          desc="The offcial website of Enactus SMIT built uing React.js, TailwindCSS, Framer Motion and Firebase."
          vidSrc="https://github.com/abhrajitray77/Enactus-smit-final/assets/67530432/13e2f111-d406-4a1a-ab0c-bef16c067ffc"
          projLink="https://enactus-smit-final.vercel.app/"
          gitLink="https://github.com/abhrajitray77/Enactus-smit-final"
          tech={[
            "React.js",
            "TailwindCSS",
            "Framer-Motion",
            "React-Router",
            "Firebase",
            "EmailJS",
            "Javascript"
          ]}
        />
        <ProjCard
          name="Gpt-3 X Web Clipper Chrome extension"
          desc="ReactJS Chrome Extension with GPT-3 integration and Webpage text clipping functionality.
          (My openAI credits for api calls are over)"
          vidSrc="https://github.com/abhrajitray77/reactjs-chrome-extension/assets/67530432/c9b8f1e0-50d9-4862-9705-a59603372920"
          gitLink="https://github.com/abhrajitray77/PepeGPT"
          tech={["React.js", "TailwindCSS", "OpenAI API", "Typescript"]}
        />
        <ProjCard
          name="GPT-3 Chatbot using OpenAI API"
          desc="An AI chatbot built using Next.js 13, Tailwind CSS and Typescript. Uses the OpenAI API to generate responses.
          Firebase for Google authentication for multiple users and Firestore for storing the user's chat history.
          (My openAI credits for api calls are over)"
          vidSrc="https://github.com/abhrajitray77/PepeGPT/assets/67530432/f147517f-3b1e-472b-9ff3-278ab944790f"
          projLink="https://custom-chat-gpt-alpha.vercel.app/"
          gitLink="https://github.com/abhrajitray77/PepeGPT"
          tech={["Next.js", "TailwindCSS", "OpenAI API", "Firebase", "Typescript"]}
        />
        <ProjCard
          name="Doctor's Availability Checker"
          desc="A site that fetches data from a MongoDB database to show the schedule of doctors from various departments. "
          vidSrc="https://github.com/abhrajitray77/appointment_checker/assets/67530432/ccc3a742-ada3-4877-a6ca-5e42ecd95758"
          gitLink="https://github.com/abhrajitray77/appointment_checker"
          tech={["React.js", "TailwindCSS", "MongoDB", "Express.js", "Node.js", "Javascript"]}
        />
        <ProjCard
          name="Netflix Landing Page Clone"
          desc="A Netflix landing page Clone built with Typescript, Next.js and TailwindCSS that uses the TMDB API
      to fetch the movie details and posters. "
          vidSrc="https://github.com/abhrajitray77/netflix_clone/assets/67530432/314845a0-068f-4cd8-b819-60acd6fa31e1"
          projLink="https://netflix-learn.vercel.app/"
          gitLink="https://github.com/abhrajitray77/netflix_clone"
          tech={["Next.js", "TailwindCSS", "REST API", "Typescript"]}
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
