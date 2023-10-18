"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import nextjs from "../public/imgs/skills/nextjs.svg";
import react from "../public/imgs/skills/react.svg";
import express from "../public/imgs/skills/express.svg";
import tensorflow from "../public/imgs/skills/tensorflow.svg";
import tailwindcss from "../public/imgs/skills/tailwindcss.svg";

const skillsData = [
  {
    name: "React.js",
    type: "frameworks",
    light: react,
    dark: "path/to/dark/react-icon.png",
  },
  {
    name: "Next.js",
    type: "frameworks",
    light: nextjs,
    dark: "/public/imgs/skills/nextjs.svg",
  },
  {
    name: "Express",
    type: "frameworks",
    light: express,
    dark: "path/to/dark/express-icon.png",
  },
  {
    name: "TensorFlow",
    type: "frameworks",
    light: tensorflow,
    dark: "path/to/dark/tensorflow-icon.png",
  },
  {
    name: "Tailwind CSS",
    type: "frameworks",
    light: tailwindcss,
    dark: "path/to/dark/tailwindcss-icon.png",
  },
  {
    name: "TypeScript",
    type: "Languages",
    light: "path/to/light/typescript-icon.png",
    dark: "path/to/dark/typescript-icon.png",
  },
  {
    name: "JavaScript",
    type: "Languages",
    light: "path/to/light/javascript-icon.png",
    dark: "path/to/dark/javascript-icon.png",
  },
  {
    name: "Python",
    type: "Languages",
    light: "path/to/light/python-icon.png",
    dark: "path/to/dark/python-icon.png",
  },
  {
    name: "C++/C",
    type: "Languages",
    light: "path/to/light/cpp-icon.png",
    dark: "path/to/dark/cpp-icon.png",
  },
  {
    name: "PostgreSQL",
    type: "Databases",
    light: "path/to/light/postgresql-icon.png",
    dark: "path/to/dark/postgresql-icon.png",
  },
  {
    name: "MongoDB",
    type: "Databases",
    light: "path/to/light/mongodb-icon.png",
    dark: "path/to/dark/mongodb-icon.png",
  },
  {
    name: "MySQL",
    type: "Databases",
    light: "path/to/light/mysql-icon.png",
    dark: "path/to/dark/mysql-icon.png",
  },
  {
    name: "Azure",
    type: "Cloud Services and DevOps",
    light: "path/to/light/azure-icon.png",
    dark: "path/to/dark/azure-icon.png",
  },
  {
    name: "AWS",
    type: "Cloud Services and DevOps",
    light: "path/to/light/aws-icon.png",
    dark: "path/to/dark/aws-icon.png",
  },
  {
    name: "Appwrite",
    type: "Cloud Services and DevOps",
    light: "path/to/light/appwrite-icon.png",
    dark: "path/to/dark/appwrite-icon.png",
  },
  {
    name: "Firebase",
    type: "Cloud Services and DevOps",
    light: "path/to/light/firebase-icon.png",
    dark: "path/to/dark/firebase-icon.png",
  },
  {
    name: "Supabase",
    type: "Cloud Services and DevOps",
    light: "path/to/light/supabase-icon.png",
    dark: "path/to/dark/supabase-icon.png",
  },
  {
    name: "Kubernetes",
    type: "Cloud Services and DevOps",
    light: "path/to/light/kubernetes-icon.png",
    dark: "path/to/dark/kubernetes-icon.png",
  },
  {
    name: "Docker",
    type: "Cloud Services and DevOps",
    light: "path/to/light/docker-icon.png",
    dark: "path/to/dark/docker-icon.png",
  },
  {
    name: "GitLab",
    type: "Cloud Services and DevOps",
    light: "path/to/light/gitlab-icon.png",
    dark: "path/to/dark/gitlab-icon.png",
  },
];


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
    className="flex flex-col justify-center"
    >
      {/*frameworks*/}
      <div>
        <h2 className="text-3xl font-bold">Frameworks</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
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
                  <p className="text-center">{skill.name}</p>
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
