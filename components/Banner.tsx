"use client";
import Image from "next/image";
import React from "react";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import back from "../public/imgs/finalBg.webp";
import front from "../public/imgs/semifinal1lowcut.webp";

const Banner = () => {
  return (
    <div className="relative h-screen w-auto">
        <div className="absolute">
            <Image
            src={back}
            alt=""
            />
        </div>
        <div className="absolute">
            <Image
            src={front}
            alt=""
            />
        </div>
    </div>
  );
};

export default Banner;
