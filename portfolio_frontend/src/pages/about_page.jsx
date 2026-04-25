import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiCloudinary,
  SiMongodb,
  SiNextdotjs,

  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router";
import image from '../../public/images/img5.jpeg'


export default function AboutSection() {
  // Tech stack icons with labels
  const techStack = [
    { icon: SiReact, name: "React JS", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "NextJS", color: "#000000" },
    { icon: SiTailwindcss, name: "Tailwindcss", color: "#06B6D4" },
    { icon: SiMongodb , name: "MongoDB", color: "#336791" },
    { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5" },
  ];

  return (
    <div className="bg-gradient h-full xl:px-64 md:px-24 px-4 sm:px-16 py-16">
      {/* Main container with flex layout */}
      <div className="text-[var(--text-primary)] flex flex-col lg:flex-row items-center justify-between gap-16 w-full ">
        {/* LEFT SECTION - SINGLE PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3  flex-shrink-0  h-full"
        >
          {/* Image container with professional styling */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[var(--border-radious)]/30">
            <img
              src={image}
              alt="Ritesh Tamang - Frontend Developer"
              className="lg:w-full  h-120 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-secondary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* RIGHT SECTION - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/3  space-y-6  "
        >
          {/* Section Title */}
          <p className="text-3xl md:text-4xl font-bold text-[var(--text-secondary)]">
            About Me
          </p>

          {/* Bio Content */}
          <div className="space-y-4">
            <p className="text-[var(--text-primary)]/80 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Ritesh
              </span>
              , a passionate{" "}
              <span className="text-[var(--text-secondary)] font-semibold">
                React and Next.js developer
              </span>{" "}
              from Kathmandu, Nepal. I love building clean, responsive, and
              user-friendly web applications that bring ideas to life.
            </p>

            <p className="text-[var(--text-primary)]/80 leading-relaxed">
              My journey into web development started with curiosity about how
              websites work. Since then, I've been developing projects using{" "}
              <span className="text-[var(--text-primary)]/90 font-semibold">
                React, Next.js, TypeScript, Tailwind CSS, MongoDB
              </span>
              , and{" "}
              <span className="text-[var(--text-primary)]/90 font-semibold">
                Cloudinary
              </span>
              .
            </p>

            <p className="text-[var(--text-primary)]/80 leading-relaxed">
              I enjoy crafting smooth user experiences, writing clean code, and
              exploring new technologies that push my creativity. My goal is to
              grow as a full-stack developer and collaborate with teams that
              care about design, performance, and innovation.
            </p>

            <p className="text-[var(--text-primary)]/80 leading-relaxed">
              When I'm not coding, I'm usually exploring new UI trends, tweaking
              designs, or contributing to open-source projects. If you'd like to
              connect or collaborate, feel free to{" "}
              <Link
                to="/contact"
                className="text-[var(--text-secondary)] hover:underline underline-offset-2 font-semibold transition-all"
              >
                reach out
              </Link>
              !
            </p>
          </div>

          {/* TECH STACK ICONS - Optimized display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {techStack.map((tech, index) => (
              <Tooltip
                key={index}
                title={tech.name}
                placement="top"
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "var(--text-secondary)",
                      color: "var(--tooltip-color)",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                    },
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: "var(--border-color)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                  className="p-3 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-radious)]/30 transition-all duration-500 cursor-pointer hover:bg-[var(--bg-secondary)]"
                >
                  <tech.icon className="w-6 h-6 text-[var(--text-secondary)]" />
                </motion.div>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
