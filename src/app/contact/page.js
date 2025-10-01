"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zen_Dots, Sour_Gummy } from "next/font/google";
import emailjs from "@emailjs/browser";

const zenDots = Zen_Dots({ subsets: ["latin"], weight: "400" });
const sourGummy = Sour_Gummy({ subsets: ["latin"], weight: "500", style: "italic" });

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await emailjs.send(
        "service_d725frk",       // ← replace with your EmailJS service ID
        "template_jppzbm2",  // ← replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "0enJdkNR-hkeU-fiD"    // ← replace with your EmailJS public key
      );

      if (res.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${zenDots.className} flex flex-col  items-center min-h-screen bg-black text-white p-4`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-16 text-white "
      >
        Contact Me
      </motion.h2>

      <div className="flex justify-center items-center min-h-[60vh]">

      <div className="border-2 rounded-xl border-white  p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side - Info */}
          <div className="md:w-1/2 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-600">
            <h3 className={`${sourGummy.className} text-2xl font-bold mb-4`}>
              Reach out !
            </h3>
            <p className="mb-2 text-center">
              Hi there! I&apos;m starting my journey as a developer and excited to grow my skills.
            </p>
            <p className="mb-2 text-center">
              I’m open to learning, collaborating, and connecting with like-minded people.
            </p>
            <p className="text-center">Drop me a message!</p>

            <p className="mt-4 mb-2 text-center font-light">Check out my profiles:</p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/pavithra-murugan-758280227/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://leetcode.com/u/Pavithra03/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/github.png" alt="GitHub" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
         
         <div className="md:w-1/2 self-center flex justify-center items-center px-6 md:px-8">
         <form
         onSubmit={handleSubmit}
         className="flex flex-col w-full max-w-md gap-6 p-6 border border-gray-600 rounded-xl bg-black"
         >
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-lg  text-white">Name *</label>
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-4/5 h-6 p-4 self-center rounded-lg border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white mx-auto"
            required
            />
          </div>


    {/* Email */}
    <div className="flex flex-col">
      <label className="mb-2 text-lg  text-white">Email *</label>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-4/5 self-center p-4 rounded-lg border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
        required
      />
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label className="mb-2 text-lg  text-white">
        Message *
      </label>
      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        maxLength="1000"
        value={formData.message}
        onChange={handleChange}
        className="w-4/5 self-center p-4 rounded-lg border border-gray-500 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="self-center bg-white text-black font-bold px-8 py-3 rounded-md shadow hover:bg-[#00A8FF] transition"
    >
      SEND →
    </button>

    {/* Status */}
    {status && <p className="mt-4 text-center text-white">{status}</p>}
  </form>
</div>

        </div>
      </div>
      </div>
      <span className="absolute text-[6rem] md:text-[9rem] font-bold text-white opacity-10 select-none bottom-16 pointer-events-none">
        LET&apos;S COLLABORATE
      </span>
    </motion.div>
  );
}
