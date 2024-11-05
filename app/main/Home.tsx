"use client";
import React from 'react';
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";
import { div } from 'framer-motion/client';


export function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);


  return (
    <section className="flex flex-row md:flex-row items-center justify-around  ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
      
      <div className="space-y-4">
      <h1 className="text-7xl font-bold text-center mt-[12rem] items-center">
      <span className="text-black">Everything Talent simplifies hiring with a</span> 
      <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> free ATS and AI</span> 
      <span className="text-black"> driven assessments</span>
 </h1>
 
 </div>
 
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
     </section>
   
  );
};
export default ParticlesDemo ;



 

  
// const Home = () => {
//   return (
//     <div>
//     <section className="flex flex-row md:flex-row items-center justify-around  ">
//       <div className="md:w-1/2 space-y-4">
// <h1 className="text-7xl font-bold text-center mt-[10rem]">
//       <span className="text-black">Everything Talent simplifies hiring with a</span> 
//       <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> free ATS and AI</span> 
//       <span className="text-black"> driven assessments</span>
// </h1>


       
//         </div>
     
      
//       </section>
//       </div>
//   );
// }; 

// export default Home;
