"use client";
import React from 'react';
import { GridBackgroundDemo } from '../ui/Grid';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaGitAlt } from 'react-icons/fa';

const skills = [
  {
    name: 'React.js',
    logo: <FaReact size={44} />,
  },
  {
    name: 'Node.js',
    logo: <FaNodeJs size={44} />,
  },
  {
    name: 'MongoDB',
    logo: <FaDatabase size={44} />,
  },
  {
    name: 'JavaScript (ES6+)',
    logo: <FaJs size={44} />,
  },
  {
    name: 'HTML5 & CSS3',
    logo: <FaHtml5 size={44} />,
  },
  {
    name: 'Version Control (Git)',
    logo: <FaGitAlt size={44} />,
  },
  {
    name: 'React.js',
    logo: <FaReact size={44} />,
  },
  {
    name: 'Node.js',
    logo: <FaNodeJs size={44} />,
  },
  {
    name: 'MongoDB',
    logo: <FaDatabase size={44} />,
  },
];

const GridBackgroundDemo2 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <GridBackgroundDemo>
        <div className="py-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Skills Showcase</h1>
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-6">
              {skills.slice(0, 6).map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-6">
              {skills.slice(6, 9).map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </div>
            <div className="flex justify-center">
              {skills.slice(9, 11).map((skill, index) => (
                <SkillCard key={index} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </GridBackgroundDemo>
    </div>
  );
};

const SkillCard = ({ skill, delay }) => (
  <motion.div
    className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center justify-center transform transition-all hover:scale-105 m-1"
    style={{ width: '100px', height: '120px' }}
    whileHover={{ color: '#0EA8FF', scale: 1.1 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    {skill.logo}
    <motion.h2
      className="text-sm font-semibold text-gray-800 text-center mt-2"
      whileHover={{ color: '#AAFF00', scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {skill.name}
    </motion.h2>
  </motion.div>
);

export default GridBackgroundDemo2;
