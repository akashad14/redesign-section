"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";


export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-16">
      <div className="space-y-6 max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl mt-12">
          <span className="text-black dark:text-white">Everything Talent simplifies hiring with a </span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            free ATS and AI
          </span>
          <span className="text-black dark:text-white"> driven assessments</span>
        </h1>
      </div>

      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  );
}

export default ParticlesDemo;
