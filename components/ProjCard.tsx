import Image from "next/image";
import React from "react";
import altpic from "../public/imgs/finalBg.webp";

const ProjCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-20 px-6 md:px-10 gap-20 justify-items-center">
      <div className="w-[400px]">
        <Image className="rounded-lg" src={altpic} alt="" />
        <div className="space-y-2 mt-4">
          <h2>Project Name</h2>
          <p>Description</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default ProjCard;
