"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

const skillHeader: Variants = {
  offscreen: {
    translateX: -200,
    opacity: 0,
  },
  onscreen: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};
const skills: Variants = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const Skills = () => {
  return (
    <div>
      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={skillHeader}
        className="custom-h1"
      >
        Technologies that I love working with --&gt;
      </motion.h1>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={skills}
        className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-4 mt-12
            place-items-start "
      >
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
          width={300}
          height={100}
        />
        <Image
          className="w-40 my-auto"
          alt=""
          src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
          width={300}
          height={100}
        />
      </motion.div>
      <div className="mt-12">
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={skillHeader}
          className="custom-h1"
        >
          Skills that come in handy --&gt;
        </motion.h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={skills}
          className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-4 mt-12
            place-items-start"
        >
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/Krita-203759?style=for-the-badge&logo=krita&logoColor=EEF37B"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white"
            width={300}
            height={100}
          />
          <Image
            className="w-40 my-auto"
            alt=""
            src="https://img.shields.io/badge/GODOT-%23FFFFFF.svg?style=for-the-badge&logo=godot-engine"
            width={300}
            height={100}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
