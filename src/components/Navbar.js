"use client";
import Link from "next/link";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${zenDots.className} fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 md:px-20">
        {/* Logo only */}
        <Link href="/" className="flex items-center relative left-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center relative left-38 gap-10 text-xl">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                color: "#00A8FF",
                textShadow: "0px 0px 8px #00A8FF",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className="relative group text-gray-300 transition duration-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00A8FF] group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 w-full py-6 flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 text-xl transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
