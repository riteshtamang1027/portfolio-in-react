import React from "react";

import { motion } from "framer-motion";

import { FaNodeJs } from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCloudinary,SiMongodb,
} from "react-icons/si";

import { TbDatabase } from "react-icons/tb";

const skills = [
  { i_name: "React", 
    icon: SiReact,
  },
   {
    i_name: "JavaScript",
    icon: FaNodeJs,
  },
  {
    i_name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    i_name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    i_name: "MongoDB",
    icon: SiMongodb,
  },
  {
    i_name: "Cloudinary",
    icon: SiCloudinary,
  },
];

export default function Techstack_section() {
  return (
    <div>

      {/* Tech Stack Section */}

      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
        className="space-y-8"
      >

        <p className="text-3xl font-bold max-sm:text-2xl text-[var(--text-secondary)]">
          Tech Stack:
        </p>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill,index) => (
            <motion.span
            key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-4 py-1 border border-[var(--border-radious)]/40 rounded-full text-sm text-[var(--text-secondary)] bg-[var(--bg-secondary)]/80"
            >
              <skill.icon   className="text-[var(--text-secondary)] md:w-6 md:h-6 w-4 h-4" />
              <span className="md:text-base text-sm  ">{skill.i_name}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
