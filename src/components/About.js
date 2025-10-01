"use client";

import { motion } from "framer-motion";

const content = [
  {
    title: "Who I Am",
    text: "Hi, I&apos;m Pavithra, a budding full-stack developer who enjoys tackling challenges and building applications that solve real-world problems. I&apos;m passionate about learning new technologies and turning ideas into practical solutions.",
    source: "About",
  },
  {
    title: "Problem-Solving Mindset",
    text: "From early projects in college, I learned that problem-solving is the core of development. I enjoy breaking complex issues into smaller parts, debugging, and crafting clean, efficient solutions that work in the real world.",
    source: "Approach",
  },
  {
    title: "Future Goals",
    text: "As I start my professional journey, I aim to sharpen my problem-solving skills, explore modern tech stacks, and collaborate on projects that create meaningful impact.",
    source: "Vision",
  },
];

function Card({ item, className,delay=0 }) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -20, bottom: 20 }}
      dragElastic={0.2}
      whileTap={{ cursor: "grabbing" }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
      className={`w-80 md:w-[28rem] h-70 rounded-xl border-2 border-[#00A8FF] bg-black shadow-xl overflow-hidden cursor-grab ${className}`}
    >
      {/* Browser-style top bar */}
      <div className="flex items-center gap-3 pl-6 pr-4 py-2 h-6 border-b-2 border-[#00A8FF] bg-black">
        <span className="w-3 h-3 rounded-full bg-[#00A8FF]"></span>
        <span className="w-3 h-3 rounded-full bg-[#00A8FF]"></span>
        <span className="w-3 h-3 rounded-full bg-[#00A8FF]"></span>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col items-center justify-center h-64 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
          {item.title}
        </h2>
        <p className="text-sm md:text-md md:font-extralight text-slate-300 mb-4">
          {item.text}
        </p>
        <div className="text-sm text-slate-400">{item.source}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-black text-slate-200 p-6 pt-[120px] flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-10">About Me</h1>
       <span className="absolute text-[6rem] md:text-[7rem] font-bold text-white left-0 opacity-10 select-none bottom-155 pointer-events-none">
        CODING
      </span>

      {/* Absolute positioned container */}
      <div className="relative w-full top-9 max-w-5xl md:h-[700px] flex flex-col items-center justify-center gap-6 md:block">
        <Card item={content[0]} className="relative md:absolute md:top-1/4 md:left-0" delay={0.1} />
        <Card item={content[1]} className="relative md:absolute md:top-0 md:left-3/5" delay={0.3} />
        <Card item={content[2]} className="relative md:absolute md:top-4/6 md:left-5/7 md:-translate-x-1/2 md:-translate-y-1/2" delay={0.5} />

      </div>
    </div>
  );
}
