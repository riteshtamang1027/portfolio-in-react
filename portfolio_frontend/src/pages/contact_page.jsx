"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact_section() {
  return (
    <div className="text-white min-h-screen w-full py-12 xl:px-64 lg:px-32 md:px-16 px-8 sm:px-32 bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* Header */}
        <p className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
          Contact Me
        </p>
        <p className="text-center opacity-80 md:text-base text-sm max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just say hello?  
          Feel free to drop a message below or reach out through my social links.
        </p>

        {/* Contact Form + Info Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/40 border border-cyan-400/20 rounded-2xl p-6 shadow-lg space-y-6"
          >
            <p className="text-xl font-semibold text-cyan-400">
              Get in Touch
            </p>
           
          <div className="px-4 space-y-8">
              <div className="space-y-4 text-sm opacity-90">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400 w-5 h-5" />
                <p>ritesh@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400 w-5 h-5" />
                <p>+977-9812345678</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400 w-5 h-5" />
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 ">
              {[
                { icon: Facebook, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Github, link: "#" },
              ].map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 10px rgba(34,211,238,0.4)",
                    borderColor: "#22d3ee",
                  }}
                  className="p-2 border border-cyan-500/40 rounded-full hover:text-cyan-400 transition"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </div>

          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/40 border border-cyan-400/20 rounded-2xl p-6 shadow-lg space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent Successfully! (You can integrate EmailJS or API later)");
            }}
          >
            <p className="text-xl font-semibold text-cyan-400">
              Send a Message
            </p>

            <div className="space-y-4 px-4">
              <div>
                <label className="text-sm opacity-80">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full mt-1 p-2 rounded-md bg-gray-700/40 border border-cyan-500/20 text-sm outline-none focus:border-cyan-400 transition"
                ></textarea>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px rgba(34,211,238,0.5)",
                }}
                transition={{ duration: 0.3 }}
                type="submit"
                className="w-full py-2 rounded-full bg-cyan-500 text-black font-semibold hover:bg-transparent hover:text-cyan-400 border border-transparent hover:border-cyan-400 transition-all duration-500"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
