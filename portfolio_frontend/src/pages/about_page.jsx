import React from "react";
import { motion } from "framer-motion";
import {
  SiCloudinary,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

export default function AboutSection() {
  return (
    <div    
      className="xl:px-64 lg:px-32 md:px-16 px-8 bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] py-20 text-white flex flex-col md:flex-row items-center gap-12"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0"
      >
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/60">
          <img
            src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Gunshan"
            className="object-cover w-full h-full"
            
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <p className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
          About Me
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I’m <span className="text-white font-semibold">Gunshan</span>, a
          passionate{" "}
          <span className="text-cyan-400 font-semibold">
            React and Next.js developer
          </span>{" "}
          from Kathmandu, Nepal. I love building clean, responsive, and
          user-friendly web applications that bring ideas to life.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          My journey into web development started with curiosity about how
          websites work. Since then, I’ve been developing projects using{" "}
          <span className="text-white font-semibold">
            React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Drizzle ORM
          </span>
          , and <span className="text-white font-semibold">Cloudinary</span>.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          I enjoy crafting smooth user experiences, writing clean code, and
          exploring new technologies that push my creativity. My goal is to grow
          as a full-stack developer and collaborate with teams that care about
          design, performance, and innovation.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I’m not coding, I’m usually exploring new UI trends, tweaking
          designs, or helping my little sister{" "}
          <span className="text-white font-semibold">Kushum</span> with her
          studies. If you’d like to connect or collaborate, feel free to{" "}
          <a
            href="#contact"
            className="text-cyan-400 hover:underline underline-offset-2"
          >
            reach out
          </a>
          !
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-5 mt-8">
          {icons.map((Icon, i) => (
            <Tooltip
              key={i}
              title={Icon.i_name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#0891b2", // tooltip background
                    color: "black", // tooltip text
                    fontSize: "0.9rem",
                  },
                },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-xl bg-gray-800/50 border border-cyan-500/30 hover:border-cyan-400 transition"
              >
                <Icon.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

const icons = [
  { icon: SiReact, i_name: "React JS" },
  { icon: SiNextdotjs, i_name: "NextJS" },
  { icon: SiTailwindcss, i_name: "Tailwindcss" },
  { icon: SiPostgresql, i_name: "Postgresql" },
  { icon: SiCloudinary, i_name: "Cloudinary" },
];
