  "use client";
  import { motion } from "framer-motion";

  export default function CurveLine() {
    return (
      <svg
        width="100%"
        height="400"
        viewBox="0 0 800 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-100"
      >
        {/* Path line */}
        <motion.path
          d="M -30 -30 V 120 H 300 Q 400 100 400 200"
          stroke="#00A8FF"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeIn" }}
        />

        {/* Start Circle */}
        <circle cx="-30" cy="-30" r="4" fill="#00A8FF" />

        {/* End Circle */}
        <circle cx="400" cy="200" r="4" fill="#00A8FF" />

        {/* Middle Code Symbol */}
        <text x="250" y="115" fill="#00A8FF" fontSize="15">
          {"</>"}
        </text>
      </svg>
    );
  }
