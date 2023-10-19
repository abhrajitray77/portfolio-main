"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import skillsData from "../utils/skillsData"

const skills: Variants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <motion.div
    variants={skills}
    initial="offscreen"
    animate="onscreen"
    className="flex flex-col justify-center space-y-4"
    >
      {/*frameworks*/}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Frameworks</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-items-center">
          {skillsData.map((skill, i) => {
            if (skill.type === "frameworks") {
              return (
                <div className=""
                key={i}>
                  <Image
                    className="w-10 h-10 mx-auto"
                    src={skill.light}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center font-medium p-2">{skill.name}</p>
                </div>
              );
            }
          })}
        </div>

      </div>
      {/*Languages*/}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Languages</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-items-center">
          {skillsData.map((skill, i) => {
            if (skill.type === "Languages") {
              return (
                <div className=""
                key={i}>
                  <Image
                    className="w-10 h-10 mx-auto"
                    src={skill.light}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center font-medium p-2">{skill.name}</p>
                </div>
              );
            }
          })}
        </div>

      </div>

      {/*databases*/}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Databases</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-items-center">
          {skillsData.map((skill, i) => {
            if (skill.type === "Databases") {
              return (
                <div className=""
                key={i}>
                  <Image
                    className="w-10 h-10 mx-auto"
                    src={skill.light}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center font-medium p-2">{skill.name}</p>
                </div>
              );
            }
          })}
        </div>

      </div>

      {/*cloud*/}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Cloud Services and DevOps</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
          {skillsData.map((skill, i) => {
            if (skill.type === "Cloud Services and DevOps") {
              return (
                <div className=""
                key={i}>
                  <Image
                    className="w-10 h-10 mx-auto"
                    src={skill.light}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-center font-medium p-2">{skill.name}</p>
                </div>
              );
            }
          })}
        </div>

      </div>

      <div>

      </div>
      
    </motion.div>
  );
};

export default Skills;
