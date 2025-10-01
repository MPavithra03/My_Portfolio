// components/RealisticScreenDoor.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Door({ onFinish }) {
  const [isOpen, setIsOpen] = useState(false);

  const enterFullscreen = async () => {
    const el = document.documentElement;
    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        await el.webkitRequestFullscreen(); // Safari iOS
      } else if (el.msRequestFullscreen) {
        await el.msRequestFullscreen(); // IE/Edge
      }

      // Open the door once fullscreen is granted
      setIsOpen(true);

      // Call onFinish after doors fully open
      setTimeout(onFinish, 1400);
    } catch (err) {
      console.error("Fullscreen request failed:", err);
      // fallback: just open doors if fullscreen not available (mobile)
      setIsOpen(true);
      setTimeout(onFinish, 1400);
    }
  };

  const panelVariants = {
    closed: { x: "0%" },
    openLeft: { x: "-110%" },
    openRight: { x: "110%" },
  };

  return (
    <div className="fixed inset-0 flex z-50 overflow-hidden bg-black">
      {/* Left panel */}
      <motion.div
        className="flex-1 relative glitch-door border-r border-white"
        variants={panelVariants}
        initial="closed"
        animate={isOpen ? "openLeft" : "closed"}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      {/* Right panel */}
      <motion.div
        className="flex-1 relative glitch-door border-l border-green-600"
        variants={panelVariants}
        initial="closed"
        animate={isOpen ? "openRight" : "closed"}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Center Start Button */}
      {!isOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={enterFullscreen}
            className="bg-black px-6 py-3 text-lg text-white border-1 border-white rounded-lg shadow-lg  transition"
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
}
