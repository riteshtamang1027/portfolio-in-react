import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

/**
 * RESUME SECTION COMPONENT
 * Purpose: Display professional resume with skills, education, projects, and certificates
 * Features:
 * - Clean section-based layout
 * - Reusable card components
 * - Smooth animations with staggered delays
 * - Download CV button
 * - Responsive grid layout
 */

// Reusable component for section headers
const SectionHeader = ({ title }) => (
  <motion.p
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center text-[var(--text-secondary)]"
  >
    {title}
  </motion.p>
);

// Reusable component for section containers
const SectionCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    className="bg-[var(--bg-secondary)]/40 border border-[var(--border-radious)]/50 rounded-2xl p-6 shadow-lg space-y-4 hover:border-[var(--border-radious)]/80 transition-all duration-500"
  >
    {children}
  </motion.div>
);

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Skills data - organized by category for easy maintenance
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
    ],
    Styling: ["MUI", "Framer Motion", "ShadCN/UI", "CSS Grid & Flexbox"],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Database: ["PostgreSQL", "Drizzle ORM", "MongoDB"],
    Tools: ["Git", "GitHub", "Cloudinary", "Figma", "VS Code"],
  };

  // Projects data - reusable project structure
  const projects = [
    {
      title: "Blog Application",
      description:
        "A full-stack blog platform where users can create, edit, and like articles with image uploads.",
      tech: "Next.js • PostgreSQL • Drizzle ORM • Cloudinary • Clerk",
      link: "https://github.com",
    },
    {
      title: "Movie Search App",
      description:
        "A responsive web app that fetches and displays movie data. Features real-time search and filtering.",
      tech: "React.js • Tailwind CSS • OMDb API • Axios",
      link: "https://github.com",
    },
  ];

  // Certificates data
  const certificates = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
    },
    { title: "Responsive Web Design", issuer: "Coursera" },
  ];

  /**
   * Handle CV download with loading state
   */
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 800);
    } catch (error) {
      console.error("Download error:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="text-[var(--text-primary)] min-h-screen w-full py-12 xl:px-64 lg:px-32 md:px-16 px-8 sm:px-32 bg-gradient">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Page Header */}
        <SectionHeader title="Resume" />

        {/* Professional Summary */}
        <SectionCard delay={0.1}>
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Professional Summary
          </p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            I'm a passionate Frontend Developer specializing in building modern,
            responsive, and user-friendly web applications using React, Next.js,
            and Tailwind CSS. I love turning complex ideas into smooth digital
            experiences and constantly learning new technologies to grow as a
            developer.
          </p>
        </SectionCard>

        {/* Skills Section */}
        <SectionCard delay={0.2}>
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Skills
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <p className="text-[var(--text-secondary)]/90 font-semibold text-sm uppercase tracking-wider">
                  {category}
                </p>
                <ul className="space-y-2">
                  {items.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="text-sm opacity-80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        {/* Education Section */}
        <SectionCard delay={0.3}>
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Education
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-base opacity-90">
              Bachelor of Science in Information Technology (Honours)
            </p>
            <p className="text-sm opacity-75">
              Asia Pacific University of Technology and Innovation (APU) —
              2025–Present
            </p>
          </div>
        </SectionCard>

        {/* Projects Section */}
        <SectionCard delay={0.4}>
          <p className="text-xl font-semibold text-[var(--text-secondary)] mb-4">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "var(--border-color)",
                  boxShadow: "var(--shadow-glow)",
                }}
                className="border border-[var(--border-radious)] rounded-xl p-4 space-y-3 cursor-pointer transition-all duration-500 bg-[var(--bg-secondary)]/20"
              >
                <p className="text-[var(--text-secondary)]/90 font-semibold text-lg">
                  {project.title}
                </p>
                <p className="text-sm opacity-90 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-[var(--text-secondary)]/60 italic">
                  {project.tech}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] text-xs underline inline-block hover:text-[var(--text-secondary)]/70 transition-colors"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        {/* Certificates Section */}
        <SectionCard delay={0.5}>
          <p className="text-xl font-semibold text-[var(--text-secondary)]">
            Certificates
          </p>
          <ul className="space-y-3">
            {certificates.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-sm opacity-90 flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 bg-[var(--text-secondary)] rounded-full mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-xs opacity-70">— {cert.issuer}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </SectionCard>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center pt-6"
        >
          <motion.a
            href="/Ritesh_Tamang_CV.pdf"
            download
            onClick={handleDownload}
            whileHover={{
              scale: 1.05,
              boxShadow: "var(--shadow-glow)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-[var(--text-secondary)] text-[var(--tooltip-color)] font-semibold px-8 py-3 rounded-full hover:bg-transparent hover:text-[var(--text-hover)] border border-transparent hover:border-[var(--border-radious)] transition-all duration-500 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
