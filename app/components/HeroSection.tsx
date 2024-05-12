"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { MovingBorderDemo } from '../components/MovingButton'

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi there! I'm DM Nihal, a passionate {''}
        <Highlight className="text-black dark:text-white">
         Full Stack Web Developer
        </Highlight> dedicated to creating engaging and functional web experiences.
        
      </motion.h1>
      <div className="flex items-center align-middle justify-center md:px-8 lg:px-16 mt-8">
      <MovingBorderDemo/>
      </div>
      
    </HeroHighlight>
  );
}
