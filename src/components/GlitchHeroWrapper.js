// components/GlitchHeroWrapper.js
"use client";
import { motion } from "framer-motion";

export default function GlitchHeroWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(2px) hue-rotate(10deg)" }}
      animate={{ opacity: 1, filter: "blur(0px) hue-rotate(0deg)" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
