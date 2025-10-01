// components/AnimatedLine.js
"use client";
import { motion } from "framer-motion";

export default function AnimatedLine() {
  return (
    <motion.svg
      viewBox="0 0 4 800"   // 4px wide, 800px tall
      fill="none"
      className="absolute top-50 left-5/10 -translate-x-1/2 h-[600px] w-[5px] pointer-events-none"
    >
      {/* Vertical line */}
      <motion.path
        d="M2 0 L2 800"   // straight vertical line from top to bottom
        stroke="#00A8FF"
        strokeWidth="4"
        className="drop-shadow-[0_0_6px_#00A8FF]"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.circle
        cx="2"    
        r="8"
        fill="#00A8FF"
        className="drop-shadow-[0_0_8px_#00A8FF]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </motion.svg>
  );
}
