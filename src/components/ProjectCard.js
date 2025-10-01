// components/ProjectCard.js
"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, image, tech, link, github }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-full md:w-[340px] h-[420px]  rounded-2xl perspective"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative md:w-full md:h-full  w-4/6 h-8/10 shadow-lg shadow-[#00A8FF]/90 duration-700 transform-style-preserve-3d transition-transform ${
          hovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full  border-2 border-white text-white rounded-xl p-6 backface-hidden flex flex-col justify-center  items-center gap-4 shadow-lg">
          <h3 className="text-2xl  pl-4 ">{title}</h3>
          <p className="mt-4 text-sm  text-gray-300">{description}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full border-2 border-white  rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-center gap-10 shadow-lg">
          {/* Image */}
          <div className="w-full h-50 overflow-hidden rounded-lg">
            <img
              src={image} 
              alt={title}
              className="w-full h-full object-cover border-2"
            />
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-sm text-gray-300">
            {tech.split(",").map((t, i) => (
              <span key={i} className="px-2 py-1 bg-gray-800 rounded-md">
                #{t.trim()}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-600 px-4 py-2 rounded-lg font-medium "
            >
              Visit
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



 