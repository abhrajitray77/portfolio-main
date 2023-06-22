import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Url, UrlObject } from "url";

type ProjCardProps = {
  name: string;
  desc: string;
  tech: string[];
  vidSrc: string;
  projLink?: string;
  gitLink?: string;
};

const ProjCard = ({
  name,
  desc,
  tech,
  vidSrc,
  projLink,
  gitLink,
}: ProjCardProps) => {
  return (
    <div className="grid lg:grid-cols-2  ">
      <div className="w-auto">
        <a href={projLink ? projLink : gitLink} target="_blank"
         className="cursor-pointer">
          <video src={vidSrc} autoPlay loop muted width={400} height={220}
          className="inline-block" />
        </a>
      </div>
      <div className="flex-col space-y-2 mt-4 lg:mt-0 ">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {name}
        </h2>
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
          {projLink && (
            <a
              className="text-indigo-500 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-800"
              href={projLink}
              target="_blank"
            >
              <h3 className="pt-4 font-medium">Deployed Version</h3>
            </a>
          )}
          {gitLink && (
            <a
              className="text-indigo-500 dark:text-blue-300 dark:hover:text-blue-200 hover:text-blue-800"
              href={gitLink}
              target="_blank"
            >
              <h3 className="pt-4 font-medium">Github Link</h3>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjCard;
