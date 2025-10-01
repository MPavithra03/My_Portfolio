"use client";
import React, { useState } from "react";
import RealisticScreenDoor from "@/components/RealisticScreenDoor";
import GlitchHeroWrapper from "@/components/GlitchHeroWrapper";
import Hero from "../components/Hero";
import About from "../components/About";
import AnimatedLine from "@/components/AnimatedLine";
import { Zen_Dots } from "next/font/google";
import CurveLine from "@/components/CurveLine";

const zenDots = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  return (
    <main className={`flex flex-col relative ${zenDots.className}`}>
      
      <GlitchHeroWrapper>
        <Hero />
        
      </GlitchHeroWrapper>
      
      
      <About />
      
     

      {/* Doors overlay on top */}
      {!doorsOpen && (
        <RealisticScreenDoor onFinish={() => setDoorsOpen(true)} />
      )}
    </main>
  );
}
