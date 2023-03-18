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
    <div className="flex-cols lg:flex ">
      <div className="w-auto">
        <Image src={imgSrc} alt={altText} width={400} />
      </div>
      <div className="flex-col space-y-2 mt-4 lg:ml-10  ">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h2>
        <p>{desc}</p>
        <div>
          <h3>Tech Stack:</h3>
          <ul className="flex flex-wrap">
            {tech.map((techItem, index) => (
              <li
                className=" bg-blue-200 rounded-full mt-2 mr-2 px-3 whitespace-nowrap dark:text-gray-800
                py-1"
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
