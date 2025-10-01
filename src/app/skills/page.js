// pages/skills.js
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zen_Dots } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

const skillImages = {
  Java: "/skills/java.png",
  C: "/skills/c.png",
  Python: "/skills/python.png",
  "JavaScript": "/skills/javascript.png",
  HTML: "/skills/html.png",
  CSS: "/skills/css.png",
  "React.js": "/skills/react.png",
  "Next.js": "/skills/nextjs.png",
  "Tailwind CSS": "/skills/tailwind.png",
  "Material UI": "/skills/materialui.png",
  "Node.js (Express)": "/skills/nodejs.png",
  Flask: "/skills/flask.png",
  "Spring Boot": "/skills/spring.png",
  MySQL: "/skills/mysql.png",
  MongoDB: "/skills/mongodb.png",
  "VS Code": "/skills/vscode.png",
  PyCharm: "/skills/pycharm.png",
  "IntelliJ IDEA": "/skills/intellij.png",
  Eclipse: "/skills/eclipse.png",
  "Jupyter Notebook": "/skills/jupyter.png",
  Postman: "/skills/postman.png",
  Git: "/skills/git.png",
  GitHub: "/skills/github.png",
  Vercel: "/skills/vercel.png",
  "Framer Motion": "/skills/framer.png",
  "Canva (UI/UX & creative assets)": "/skills/canva.png",
};

const skills = [
  {
    title: "Programming Languages",
    items: ["Java", "C", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend Development",
    items: ["Node.js (Express)", "Spring Boot"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Developer Tools",
    items: [
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Eclipse",
      "Jupyter Notebook",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Platforms",
    items: ["Vercel", "Framer Motion"],
  },
];

export default function Skills() {
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Clone first and last slides for smooth infinite scroll
  const slides = [skills[skills.length - 1], ...skills, skills[0]];

  // Set initial scroll position
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setSlideWidth(width);
      containerRef.current.scrollLeft = width; // first real slide
    }

    // Update slideWidth on window resize
    const handleResize = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + slideWidth,
        behavior: "smooth",
      });

      // Check if we are at the cloned slide
      setTimeout(() => {
        if (!containerRef.current) return;
        const maxIndex = slides.length - 1;
        if (containerRef.current.scrollLeft >= slideWidth * maxIndex) {
          containerRef.current.scrollLeft = slideWidth; // jump to first real slide
        }
      }, 700); // match CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [slideWidth, slides.length]);

  // Arrow navigation
  const prevSlide = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - slideWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (!containerRef.current) return;
      if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft = slideWidth * (slides.length - 2); // jump to last real slide
      }
    }, 700);
  };

  const nextSlide = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + slideWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (!containerRef.current) return;
      if (containerRef.current.scrollLeft >= slideWidth * (slides.length - 1)) {
        containerRef.current.scrollLeft = slideWidth; // jump to first real slide
      }
    }, 700);
  };

  return (
    <div>
      
    <motion.div 
      initial={{ y: -100, opacity: 0 }} // start above the screen
  animate={{ y: 0, opacity: 1 }}    // slide to normal position
  exit={{ y: 100, opacity: 0 }}     // slide out downwards
  transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition

    className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center gap-6 justify-center px-6 py-16">
      {/* Heading at top */}
      <h1
        className={`${zenDots.className} text-4xl md:text-6xl font-bold text-whitetext-center mb-10`}
      >
        My Skills
      </h1>

      {/* Slider */}
      
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          ref={containerRef}
          className="flex  transition-all duration-700 ease-in-out"
          style={{ scrollSnapType: "x mandatory", overflowX: "hidden" }}
        >
          {slides.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col gap-4 items-center justify-center scroll-snap-align-center"
              style={{ scrollSnapAlign: "center" }}
            >
              
              <div className="flex flex-wrap justify-center gap-12">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={skillImages[item]}
                      alt={item}
                      className="w-20 h-20 object-contain mb-3"
                    />
                    <span className={`${zenDots.className} text-sm font-extralight`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <h2 className={`${zenDots.className} text-2xl text-[#00A8FF] md:text-2xl mb-10`}>
                {skill.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full px-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.div>
    </div>
  );
}
