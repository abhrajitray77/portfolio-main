import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Url } from "url";

type ProjCardProps = {
  name: string;
  desc: string;
  tech: string[];
  imgSrc: StaticImageData;
  altText: string;
  projLink: string;
};

const ProjCard = ({
  name,
  desc,
  tech,
  imgSrc,
  altText,
  projLink,
}: ProjCardProps) => {
  return (
    <div className="flex-cols md:flex">
      <div className="w-[400px] mx-auto flex items-center">
        <Image src={imgSrc} alt={altText} />
      </div>
      <div className="flex-col space-y-2 mt-4 px-0 md:px-20  ">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p>{desc}</p>
        <div>
          <h3>Tech Stack:</h3>
          <ul className="flex flex-wrap">
            {tech.map((techItem, index) => (
              <li
                className=" bg-blue-200 rounded-full mt-2 mr-2 px-2 whitespace-nowrap"
                key={index}
              >
                {techItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="pt-4">Deployment:</h3>
          <Link className="text-blue-500" href={projLink}>
            {projLink}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjCard;
