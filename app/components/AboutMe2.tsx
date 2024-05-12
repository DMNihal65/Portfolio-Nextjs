"use client";
import React, { useEffect, useRef } from "react";
import { Vortex } from "../ui/vortex";
import { ThreeDCardDemo3 } from "../components/AboutMeImg";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn"; // Assuming you have a utility function for class names

export function AboutMeSection() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeElement = aboutMeRef.current;
      if (aboutMeElement) {
        const elementTop = aboutMeElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          aboutMeElement.classList.add("animate-me");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={aboutMeRef}
      className={cn(
        "w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden flex justify-center items-center",
        "animate-me:hidden" // Initially hide until in view
      )}
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="md:w-1/2">
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center md:text-left">
              About Me
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center md:text-left">
              I'm a passionate full-stack web developer with expertise in React,
              Node.js, and other modern web technologies. I love creating
              interactive and user-friendly web applications that solve real-world
              problems.
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <div className="-mt-24 animate-cardTransition">
              <ThreeDCardDemo3 />
            </div>
          </motion.div>
        </motion.div>
      </Vortex>
    </div>
  );
}
