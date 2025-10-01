"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";


const roles = [
  "{ Full-Stack Developer }",
  "{ Web Designer }",
  "{ Programmer }",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[roleIndex];
    const interval = setInterval(() => {
      setText(currentRole.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentRole.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [roleIndex]);


  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black px-6 md:px-16">
      <div className=""/>
      {/* left side div */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-4 md:space-y-6">
        <motion.p
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 3 }}
  className="text-base md:text-4xl left-0"
>
  &lt; Hello there, &gt; {/* greeting in code style */}
</motion.p>

<motion.h1
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 3 }}
  className="text-4xl md:text-7xl text-[#00A8FF] font-extrabold -tracking-tight"
>
  I&apos;m Pavithra !
</motion.h1>

<motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 3 }}
          className="text-2xl md:text-4xl font-mono text-white"
        >
          {text}
          <span className="blink">|</span>
        </motion.p>

     
<motion.div
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 3 }}
  className="flex space-x-10 items-center justify-center"
>
  {/* GitHub */}
  <a
    href="https://github.com/MPavithra03?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img src="/assets/github.png" alt="GitHub" className="w-12 h-12" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/pavithra-murugan-758280227/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/Pavithra03/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img src="/assets/leetcode.png" alt="LeetCode" className="w-12 h-12" />
  </a>
</motion.div>


   
<motion.p
  initial={{ opacity: 0, y: 70 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.9, duration: 3 }}
  className="text-sm md:text-lg animate-pulse font-bold"
>
  🟢 Ready to Work
</motion.p>


        {/* Glow background */}
        <div className="absolute w-40 h-40 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        

      </div>

      {/* right side div */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        {/* Outer loop */}
        <motion.div
          className="absolute w-62 h-62 md:w-106 md:h-106"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 40 100 A 40 40 0 0 1 160 100"
              stroke="#fff"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="transparent"
            />
            <circle cx="40" cy="100" r="1.3" fill="#fff" />
            <circle cx="160" cy="100" r="1.3" fill="#fff" />
          </svg>
        </motion.div>

        {/* Middle loop */}
        <motion.div
          className="absolute w-48 h-48 md:w-76 md:h-76"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 30 100 A 60 60 0 0 0 170 100"
              stroke="#fff"
              strokeWidth="1"
              strokeLinecap="round"
              fill="transparent"
            />
            <circle cx="30" cy="100" r="2" fill="#fff" />
            <circle cx="170" cy="100" r="2" fill="#fff" />
          </svg>
        </motion.div>

        {/* Inner loop */}
        <motion.div
          className="absolute w-36 h-36 md:w-56 md:h-56"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="transparent"
            />
            <circle cx="20" cy="100" r="2" fill="#fff" />
            <circle cx="180" cy="100" r="2" fill="#fff" />
          </svg>
        </motion.div>

        {/* CV button */}
        <motion.a
          href="/Pavithra_Resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative w-24 h-24 md:w-36 md:h-36 flex items-center justify-center rounded-full border-2 border-[#00A8FF]
                     text-[#00A8FF] text-sm md:text-base font-bold hover:bg-[#00A8FF] hover:text-black 
                     transition-colors duration-300 shadow-[0_0_10px_#00A8FF] z-10"
        >
          CV
        </motion.a>
      </div>

      <span
        id="hero-connector"
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{
          top: "85vh",
          width: 8,
          height: 8,
          display: "block",
          pointerEvents: "none",
        }}
        aria-hidden
      />
<div className="hidden md:block absolute bottom-13 left-1/2 transform -translate-x-1/2">
  <svg
    className="w-14 h-24 text-[#00A8FF]"
    viewBox="0 0 50 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15"
      y="1"
      width="20"
      height="40"
      rx="12"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      className="animate-bounce"
      cx="25"
      cy="26"
      r="3"
      fill="currentColor"
    />
  </svg>
</div>




    </section>
  );
}
