import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import test from "../public/imgs/profile-pic.webp";
import propic from "../public/imgs/profile-pic3.png";
import altpic from "../public/imgs/finalBg.webp";
import ProjCard from "@/components/ProjCard";
import encpic from "../public/imgs/enc.gif";
import netpic from "../public/imgs/net.gif";
import Footer from "@/components/Footer";

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
                "React-Router",
              ]}
            />
            <ProjCard
              name="Netflix Landing Page Clone"
              desc="A Netflix landing page Clone build with Typescript, Next.js and TailwindCSS "
              imgSrc={netpic}
              altText="Netflix Clone"
              projLink="https://netflix-learn.vercel.app/"
              tech={["Next.js", "TailwindCSS"]}
            />
          </div>
        </section>

        {/* Contact */}

        <section className="flex-col space-y-3">
          <h1 className="custom-h1 mt-20 lg:mt-28 flex justify-start mb-8">
            Reach Out To Me
          </h1>
          {/*    email */}
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Send an E-Mail</h3>
            <div className="contact-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-8 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
              </svg>
              <span className="">abhrajitray77@gmail.com</span>
            </div>
          </div>
          {/*  Socials  */}
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Socials</h3>
            <a
              href="https://www.linkedin.com/company/enactus-smit/"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-8 mt-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="">LinkedIn</span>
            </a>
            <a
              href="https://github.com/abhrajitray77"
              target="_blank"
              className="contact-item"
            >
              <svg
                viewBox="0 0 512 512"
                className="w-10 h-10 mt-1"
                fill="currentColor"
              >
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
              <span className="">GitHub</span>
            </a>
          </div>
        </section>
      </article>
      <div className="pb-5 mx-10 md:mx-20 lg:mx-32">
        <Footer />
      </div>
    </main>
  );
}
