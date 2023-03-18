import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import test from "../public/imgs/profile-pic.webp";
import propic from "../public/imgs/profile-pic3.png";
import altpic from "../public/imgs/finalBg.webp";
import ProjCard from "@/components/ProjCard";
import encpic from "../public/imgs/enc.gif";
import netpic from "../public/imgs/net.gif";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <section className="h-auto w-auto mt-20  ">
        <div className="relative flex p-20 pt-5 ">
          <div className="p-6 h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image
              className="drop-shadow-2xl"
              src={propic}
              height={1000}
              width={1000}
              alt="propic"
            />
          </div>
          <div
            className="absolute bottom-0 md:left-[400px] md:top-20 lg:left-[450px] lg:top-20 flex-col 
          font-mono leading-none font-extrabold"
          >
            <h1 className="text-[4rem] md:text-[6rem]">ABHRAJIT</h1>
            <h1 className="text-[3.8rem] md:text-[5.8rem]">RAY</h1>
          </div>
        </div>
      </section>

      {/* About me */}
      <article className="mx-10 my-28 md:mx-20 lg:mx-32">
        <section className="h-auto w-auto ">
          <div className="relative flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to my little corner of the web{" "}
              <span className="text-[40px] md:text-[50px] lg:text-[60px]">
                !
              </span>
            </h1>
            <p className="md:text-2xl font-medium pt-10 leading-relaxed ">
              I&apos;m a frontend web developer who specializes in creating fast
              and scalable websites with responsive design and great UI.
              <br />
              I use Next.js, React, and Tailwind CSS, along with technologies
              like Firebase, Supabase and MongoDB.
              <br />
              <br />
              Let&apos;s connect and work on something cool together!
            </p>
          </div>
          <button className="bg-cyan-800 p-3 rounded-lg text-white mt-6">
            Connect!
          </button>
        </section>

        {/* Skills */}

        <section className="h-auto w-auto mt-20">
          <div>
            <h1 className="custom-h1">
              Technologies that I love working with --&gt;
            </h1>
            <div
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
            </div>
          </div>
          <div className="mt-12">
            <h1 className="custom-h1">Skills that come in handy --&gt;</h1>
            <div
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
            </div>
          </div>
        </section>

        {/* Projects */}

        <section className="flex flex-col h-auto w-auto mt-20">
          <h1 className="custom-h1 mx-auto mt-10">
            Projects that I&apos;ve worked on
          </h1>
          <div className="flex-cols w-full mt-20 px-6 md:px-10 space-y-20">
            <ProjCard
              name="Enactus SMIT"
              desc="The offcial website of Enactus SMIT built uing React.js, TailwindCSS and Framer Motion."
              imgSrc={encpic}
              altText="Enactus SMIT"
              projLink="https://enactus-smit-final.vercel.app/"
              tech={[
                "React.js",
                "TailwindCSS",
                "Framer-Motion",
                "React-Router"
              ]}
            />
            <ProjCard
              name="Netflix Landing Page Clone"
              desc="A Netflix landing page Clone build with Typescript, Next.js and TailwindCSS "
              imgSrc={netpic}
              altText="Netflix Clone"
              projLink="https://netflix-learn.vercel.app/"
              tech={[
                "Next.js",
                "TailwindCSS"
              ]}
            />
          </div>
        </section>

        {/* Contact */}

        <section>
          <h1 className="custom-h1 mt-28 flex justify-start">Contact</h1>
        </section>
      </article>
    </main>
  );
}
