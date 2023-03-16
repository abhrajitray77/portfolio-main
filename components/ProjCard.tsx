import Image from "next/image";
import React from "react";
import altpic from "../public/imgs/finalBg.webp";

const ProjCard = () => {
  return (
    <div className="flex-cols md:flex">
      <div className="w-[400px] mx-auto">
        <Image className="rounded-lg" src={altpic} alt="" />
      </div>
      <div className="flex-col space-y-2 mt-4 px-0 md:px-20  ">
        <h2>Project Name</h2>
        <p>Description</p>
        <ul></ul>
      </div>
    </div>
  );
};

export default ProjCard;
