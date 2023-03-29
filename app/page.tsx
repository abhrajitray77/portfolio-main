"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import { motion, Variants} from "framer-motion";


const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Background */}
      
      <div className={`fixed inset-0 overflow-hidden -z-50 `}>
      <div className="absolute grid grid-cols-2 place-items-center w-full  overflow-hidden ">
        <div className="w-72 h-72 bg-purple-300 
        rounded-full mix-blend-multiply filter blur-3xl opacity-70 md:animate-blob">
         </div>
         <div className=" w-80 h-80 bg-yellow-300
          rounded-full mix-blend-multiply filter blur-3xl opacity-70 md:animate-blob animation-delay-2000">

          </div>
        <div className="w-[500px] h-[500px] bg-[#ff00b391]
        rounded-full mix-blend-multiply filter blur-3xl opacity-70 md:animate-blob animation-delay-4000">

        </div>
        <div className="absolute -inset-y-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px]
        bg-[#29d1e7f1] dark:bg-[#7300d1a8] 
        rounded-full mix-blend-normal filter blur-2xl opacity-70 md:special-blob animation-delay-7000">

        </div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#7300d1a8]
          rounded-full mix-blend-multiply filter blur-3xl opacity-80 md:color-blob animation-delay-1000">

          </div>
      </div>
      </div>

      <section className="h-auto w-auto mt-20  ">
      <Banner />
      </section>

      {/* About me */}
      <article className="mx-10 my-28 md:mx-20 lg:mx-32">
      <motion.section
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariants}
          viewport={{once:true}}
        
         className="h-auto w-auto " id="about">
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
        </motion.section>

        {/* Skills */}

        <section className="h-auto w-auto mt-20" id="skills">
          <Skills />
        </section>

        {/* Projects */}

        <section className="flex flex-col h-auto w-auto mt-20" id="proj">
          <Projects />
        </section>

        {/* Contact */}

        <section className="flex-col space-y-3" id="cont">
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
