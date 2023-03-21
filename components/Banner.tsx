"use client";
import Image from "next/image";
import React from "react";
import back from "../public/imgs/finalBg.webp";
import front from "../public/imgs/final1lowcut.webp";
import propic from "../public/imgs/profile-pic3.png";

const Banner = () => {
  return (
    <div className="relative h-screen w-auto">
      <div className="flex top-40 left-32 z-10">
        <div className="md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] ">
          <Image
            className="drop-shadow-2xl"
            src={propic}
            height={1000}
            width={1000}
            alt="propic"
          />
        </div>
        <div className="absolute flex-col left-[450px] top-20 font-mono leading-none font-extrabold
         ">
          <h1 className="">ABHRAJIT</h1>
          <h1 className="">RAY</h1>
        </div>
      </div>
{/*       <div className="-z-50  ">
        <div className="absolute">
          <Image src={back} alt="" />
        </div>
        <div className="absolute ">
          <Image src={front} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
