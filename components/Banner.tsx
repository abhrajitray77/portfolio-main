"use client";
import Image from "next/image";
import React from "react";
import back from "../public/imgs/finalBg.webp";
import front from "../public/imgs/semifinal1lowcut.webp";
import propic from "../public/imgs/profile-pic3.png";

const Banner = () => {
  return (
    <div className="relative  h-screen w-auto">
        <div className="h-[500px] w-[500px] z-10 absolute top-40 left-32">
          <Image className="drop-shadow-2xl"
          src= {propic}
          height={1000}
          width={1000}
          alt="" 
          />
        </div>
      <div className="-z-50  ">
        <div className="absolute">
            <Image
            src={back}
            alt=""
            />
        </div>
        <div className="absolute ">
            <Image
            src={front}
            alt=""
            />
        </div>
      </div>

    </div>
  );
};

export default Banner;
