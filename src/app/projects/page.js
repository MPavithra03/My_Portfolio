// pages/projects.js 
"use client";
import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import { Zen_Dots } from "next/font/google";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

const projects = [
  {
    title: "Portfolio",
    description:
      "My Personal portfolio website.",
    image: "/images/portfolio.png", 
    tech: "Next.js, Tailwindcss",
    github:"https://github.com/MPavithra03/My_Portfolio",
  },
  {
    title: "EMS",
    description:
      "Employee Management System profiles, payroll, performance tracking, reporting...",
    image: "/images/emsl.png", 
    tech: "React.js, Spring Boot, MySQL,Tailwindcss",
    github:"https://github.com/MPavithra03/Employee_management",
  },
  {
    title: "Lie Detector",
    description:
      "Real-time microexpression analysis for lie detection.",
    image: "/images/lds.png",
    tech: "Python, Flask, React.js, TensorFlow",
    github:"https://github.com/MPavithra03/LieDetectionSystem",
  },
  {
    title: "ShareIn",
    description:
      "Post and comment system with image upload support.",
    image: "/images/sharein.png",
    tech: "MongoDB, Express, React.js, Node.js,Tailwindcss",
    github:"https://github.com/MPavithra03/ShareIn"
  },
  {
    title: "Netflix",
    description:
      "Movie/TV show browsing UI with TMDB API integration.",
    image: "/images/netflix.png",
    tech: "React.js, TMDB API,Tailwindcss",
    github:"https://github.com/MPavithra03/Netflix",
  },
  {
    title: "Weather App",
    description:
      "Weather forecast app with live API data.",
    image: "/images/weather.png", 
    tech: "Javascript, OpenWeather API",
    github:"https://github.com/MPavithra03/Weather_forecast",
  },
  
];

export default function Projects() {
  return (
    <div
      className={`${zenDots.className} min-h-screen relative flex flex-col items-center gap-6 px-6 pt-16 bg-gradient-to-b from-black to-gray-900 scroll-mt-16`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-16 text-white "
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-xl font-medium mb-16 text-white "
      >
        A showcase of my skills in action
      </motion.p>

      <div className="w-full flex flex-wrap gap-18 justify-center px-4 pb-16">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
