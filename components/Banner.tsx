import Image from "next/image";
import React from "react";
import propic from "../public/imgs/profile-pic3.webp";
import propicD from "../public/imgs/profile-pic3-dark.webp";

const Banner = () => {
  return (
    <div className="relative w-auto ">
      <div className="relative flex p-10 md:p-20 md:pt-5 ">
        <div className="p-6 h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
          <Image
            className="drop-shadow-2xl dark:hidden"
            src={propic}
            height={1000}
            width={1000}
            alt="propic"
          />
          <Image
            className="drop-shadow-2xl hidden dark:block"
            src={propicD}
            height={1000}
            width={1000}
            alt="propic"
          />
        </div>
        <div
          className="absolute bottom-0 md:left-[400px] md:top-20 lg:left-[500px] lg:top-20 flex-col 
          font-mono leading-none font-extrabold dark:text-white"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[9rem]">
            ABHRAJIT
          </h1>
          <h1 className="text-[3.8rem] md:text-[5.8rem] lg:text-[8rem]">RAY</h1>
          <h2 className="lg:text-xl">
            Frontend Developer | CS Undergrad | Open Source Contributor
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
